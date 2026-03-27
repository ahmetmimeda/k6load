import { checkStatusTime, getRandomElement , joinRandom} from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { sleep } from 'k6';


export function testfunc() {

    const url = new URL('https://jsonplaceholder.typicode.com/posts');

    let response = http.get(url.toString());

    checkStatusTime(response, 200, 10000);

    sleep(1);
}