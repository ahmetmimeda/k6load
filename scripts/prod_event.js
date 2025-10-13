import {
    checkStatus, getRandomElement, getRandomIntList, getRandomInt, appendIntToPreset, generateRandomTripletString,
    checkStatusTime
} from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { sleep } from 'k6';


export function prod_event() {  

  //const url = new URL('https://bidding-eventcollector.azurewebsites.net/events'); // no waf
  const url = new URL('https://event.mlink.com.tr/events');

  const options = ['home', 'cart', 'listing', 'search'];
  const productList = generateRandomTripletString(getRandomInt(1, 8));
  const timestamp = Date.now();
  url.searchParams.append('v', '1.0.3-beta');
  url.searchParams.append('pub', 'unknown');
  url.searchParams.append('app', 'sanalmarket');
  url.searchParams.append('t', timestamp);
  url.searchParams.append('d', 'Web');
  url.searchParams.append('lng', 'tr-TR');
  url.searchParams.append('en', getRandomElement(options));
  url.searchParams.append('en', 'home');
  url.searchParams.append('ep', 'view');
  url.searchParams.append('aid', 1684883476);
  url.searchParams.append('uid', 'UID');
  url.searchParams.append('li', '');
  const decodedpl = decodeURIComponent(productList);
  url.searchParams.append('pl', decodedpl);
  url.searchParams.append('s', '532216294');
  url.searchParams.append('ct', appendIntToPreset('60000000000', getRandomInt(100, 999)));
  //url.searchParams.append('kw', appendIntToPreset('key',  getRandomInt(10, 99)));
  url.searchParams.append('kw', 'ahmetest');
  url.searchParams.append('trans', '');
  url.searchParams.append('trc', '');
  url.searchParams.append('lc', '');
  url.searchParams.append('os', 'iOS 17');
  url.searchParams.append('br', 'Google Chrome');
  url.searchParams.append('tid', crypto.randomUUID());

  
  let response = http.get(url.toString(), {
      tags: { url: 'generic'},
      headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip, deflate',
      }
  });

    checkStatusTime(response, 200, 10000);


    //sleep(1);

}
