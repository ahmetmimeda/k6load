import { check, fail } from 'k6';
import { Trend } from 'k6/metrics';

const responseTimeTrend = new Trend('custom_response_time', true); // true = avg/stddev/min/max hesaplanır

/**
 * Request süresini ölçüp Trend'e ekler.
 * Ayrıca istenirse status check de yapılabilir.
 * 
 * @param {Response} res - k6 Response objesi
 */

export function trackResponseTime(res) {
  responseTimeTrend.add(res.timings.duration);
  
}

export function randomIntBetween(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function checkStatus({ response, expectedStatus, expectedContent, failOnError, printOnError, dynamicIds }) {
  /* if (isEmpty(expectedStatus) && isEmpty(expectedContent)) {
    console.warn('No expected status or content specified in call to checkStatus for URL ' + response.url);
    return;
  } */

  let contentCheckResult;
  let statusCheckResult;

  let url = response.url;

  if (dynamicIds) {
    dynamicIds.forEach((dynamicId) => {
      if (response.url.includes(dynamicId)) {
        url = url.replace(dynamicId, '[id]');
      }
    });
  }

  if (expectedContent) {
    contentCheckResult = check(response, {
      [`"${expectedContent}" in ${url} response`]: (r) => r.body.includes(expectedContent),
    });
  }

  if (expectedStatus) {
    const obj = {};
    obj[`${response.request.method} ${url} status ${expectedStatus}`] = (r) => r.status === expectedStatus;

    statusCheckResult = check(response, obj);
  }
  
  if (!statusCheckResult || !contentCheckResult && expectedContent) {
    if (printOnError && response.body) {
      console.log("Unexpected response: " + response.body);
    }
    if (failOnError) {
      if (!statusCheckResult && (!contentCheckResult && expectedContent)) {
        fail(`${response.request.method} ${url} status ${expectedStatus} and "${expectedContent}" not found in response`);
      } else {
        if (!statusCheckResult) {
          fail(`Received unexpected status code ${response.status} for URL: ${url}, expected ${expectedStatus}`);
        } else if (!contentCheckResult) {
          fail(`"${expectedContent}" not found in response for URL: ${url}`);
        }
      }
    }
  }
}

function isEmpty(str) {
  return (!str || str.length === 0);
}

export function getRandomIntList(count, digits) {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  const arr = [];

  for (let i = 0; i < count; i++) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomInt);
  }
  return arr;
}

export function getRandomInt(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function appendIntToPreset(preset, num) {
  return `${preset}${num}`;
}

export function generateRandomTripletString(count) {
  const parts = [];

  for (let i = 0; i < count; i++) {
    const id = getRandomInt(10000000, 99999999);
    const a = getRandomInt(1, 10);   
    const b = getRandomInt(10, 99);  

    parts.push(`${id}:${a}:${b}`);
  }

  return parts.join(";");
}