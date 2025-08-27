import {stage_click } from "../scripts/stage_click.js";
import {prod_click } from "../scripts/prod_click.js";
import {prod_impression} from "../scripts/prod_impression.js";

export function stage_click_scenario() {
  stage_click();
}

export function prod_click_scenario() {
  prod_click();
}

export function prod_impression_scenario() {
    prod_impression();
}