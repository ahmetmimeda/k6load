import { checkStatus, trackResponseTime } from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';


export function prod_click() {  
  const url = new URL('https://performance.mlink.com.tr/clicks');
  
  
  url.searchParams.append('li', 4808);
  url.searchParams.append('c', 10);
  url.searchParams.append('au', 'migros-sanalmarket-sponsored-product-slot-1');
  url.searchParams.append('kw', 'diş fırçası');
  url.searchParams.append('psku', 34049068);
  const decoded = decodeURIComponent('Lx5vdxgHjY0CYrqIA127%2b27uN6vN83WlLD3g2e7M4vmtbgJ85w45%2bRibcocLtLUUVb0b0GspmPwC%2fhO13G%2fiNJONKw4xrxXet%2bEPla4Sj7Xutb1uLhVSvRCA99v1cAxwptMua6C3BsVTm%2fRrGz3TMQ%3d%3d');
  url.searchParams.append('pyl', decoded);
  url.searchParams.append('t', Date.now());
  url.searchParams.append('s', '8fba48f0-e602-40aa-87f3-15cd9da1279b');
  url.searchParams.append('app', 'migros-sanalmarket');
  url.searchParams.append('os', 'iOS 17');
  url.searchParams.append('br', 'Google Chrome');

  console.log(url.toString())

  /*let response = http.get(url.toString());
  trackResponseTime(response);
  checkStatus({
    response: response,
    expectedStatus: 200,
    failOnError: true,
    printOnError: true
  });*/
  
}
