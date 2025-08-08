import { checkStatus, trackResponseTime, getRandomIntList, getRandomInt, appendIntToPreset, generateRandomTripletString } from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { sleep } from 'k6';


export function prod_event() {  

  const url = new URL('https://bidding-eventcollector.azurewebsites.net/events');
  
  const productList = generateRandomTripletString(getRandomInt(1, 8));
  
  url.searchParams.append('v', '1.0.3-beta');
  url.searchParams.append('pub', 'unknown');
  url.searchParams.append('appId', 'sanalmarket');
  url.searchParams.append('t', Date.now());
  url.searchParams.append('d', 'Web');
  url.searchParams.append('lng', 'tr-TR');
  url.searchParams.append('en', 'home');
  url.searchParams.append('ep', 'view');
  url.searchParams.append('aid', 1684883476);
  url.searchParams.append('uid', 'UID');
  url.searchParams.append('li', null);
  const decodedpl = decodeURIComponent(productList);
  url.searchParams.append('pl', decodedpl);
  url.searchParams.append('s', '532216294');
  url.searchParams.append('ct', appendIntToPreset('60000000000', getRandomInt(100, 999)));
  //url.searchParams.append('kw', appendIntToPreset('key',  getRandomInt(10, 99)));
  url.searchParams.append('kw', 'ahmetest');
  url.searchParams.append('trans', null);
  url.searchParams.append('trc', null);
  url.searchParams.append('lc', null);
  url.searchParams.append('os', 'iOS 17');
  url.searchParams.append('br', 'Google Chrome');

  /* console.log(decodedpl)
  console.log(url.toString()) */
  
  let response = http.get(url.toString(), {
  tags: { name: 'value' }
  });

  checkStatus({
    response: response,
    expectedStatus: 200,
    //failOnError: true,
    //printOnError: true
  });
  
  //sleep(2);

}
