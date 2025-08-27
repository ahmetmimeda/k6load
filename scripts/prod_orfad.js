import { checkStatus, getRandomElement , joinRandom} from "../common/utils.js";

import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { sleep } from 'k6';


export function prod_orfad() {

    const url = new URL('https://adserver.mlink.com.tr/orfad');
    const keywords = ['diş', 'diş macunu', 'diş fırçası', 'süt', 'kahve', 'krema', 'dondurma', 'su', 'zeytin yağı', 'çikolata', 'peynir', 'çay', 'kola', 'salça', 'şampuan', 'pirinç', 'ton balığı', 'maden suyu', 'çamaşır suyu', 'yumuşatıcı'];
    const adunits = [ 'migros-sanalmarket-sponsored-product-1', 'migros-sanalmarket-sponsored-product-4','migros-sanalmarket-sponsored-product-5','migros-sanalmarket-sponsored-product-7','migros-sanalmarket-sponsored-product-9','migros-sanalmarket-sponsored-product-11','migros-sanalmarket-sponsored-product-13'];

    url.searchParams.append('keyword', getRandomElement(keywords));
    url.searchParams.append('adunits', joinRandom(adunits));

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