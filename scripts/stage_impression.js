import { sleep } from 'k6';
import { checkStatus } from "../common/utils.js";

import http from 'k6/http';
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';


export function stage_impression() {  
  // example code - replace with yours!

  //const url = new URL('https://bidding-prfmnccollector-stage.azurewebsites.net/clicks?li=192&c=74&au=migros-sanalmarket-sponsored-product-slot-15&kw=çorba&psku=35050610&pyl=Lx5vdxgHjY0CYrqIA127%2b5hZ33RY7H5Fg6UkpTOObT9az3LiHCaz5V0NzR%2f6UkxxsN5RpzYW6j%2bV4omRyIcUYKVA%2f82tVW5TBwtwPstW7As0utouSQWdxxbRw6yPzuoPM2peBTm5jER6ZgfEI6uXoHm2FPnwSYKjL74Tm5vrnmo%3d&aid=1595027581&uid=5464567653&t=1744985064000&s=8fba48f0-e602-40aa-87f3-15cd9da1279b&app=migros-sanalmarket&os=iOS 17&br=Google Chrome');
  const url = new URL('https://bidding-prfmnccollector-stage.azurewebsites.net/impressions');

  
  url.searchParams.append('li', 192);
  url.searchParams.append('c', 74);
  url.searchParams.append('au', 'migros-sanalmarket-sponsored-product-slot-15');
  url.searchParams.append('kw', 'çorba');
  url.searchParams.append('psku', 35050610);
  url.searchParams.append('pyl', 'Lx5vdxgHjY0CYrqIA127%2b5hZ33RY7H5Fg6UkpTOObT9az3LiHCaz5V0NzR%2f6UkxxsN5RpzYW6j%2bV4omRyIcUYKVA%2f82tVW5TBwtwPstW7As0utouSQWdxxbRw6yPzuoPM2peBTm5jER6ZgfEI6uXoHm2FPnwSYKjL74Tm5vrnmo%3d');
  url.searchParams.append('t', Date.now());
  url.searchParams.append('s', '8fba48f0-e602-40aa-87f3-15cd9da1279b');
  url.searchParams.append('app', 'migros-sanalmarket');
  url.searchParams.append('os', 'iOS 17');
  url.searchParams.append('br', 'Google Chrome');


  let response = http.get(url.toString());
  trackResponseTime(response);
  
  checkStatus({
    response: response,
    expectedStatus: 200,
    failOnError: true,
    printOnError: true
  });
  
}
