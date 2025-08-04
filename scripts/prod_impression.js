import { checkStatus, trackResponseTime } from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';


export function prod_impression() {  

  const url = new URL('https://performance.mlink.com.tr/impressions');
  
  
  
  url.searchParams.append('li', 4808);
  url.searchParams.append('c', 9);
  url.searchParams.append('au', 'migros-sanalmarket-sponsored-product-slot-11');
  url.searchParams.append('kw', 'diş');
  url.searchParams.append('psku', 34049100);
  const decoded = decodeURIComponent('Lx5vdxgHjY0CYrqIA127%2b5hZ33RY7H5Fg6UkpTOObT9az3LiHCaz5V0NzR%2f6UkxxsN5RpzYW6j%2bV4omRyIcUYKVA%2f82tVW5TBwtwPstW7As0utouSQWdxxbRw6yPzuoPM2peBTm5jER6ZgfEI6uXoHm2FPnwSYKjL74Tm5vrnmo%3d');
  url.searchParams.append('pyl', decoded);
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
