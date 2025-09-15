export { prod_click_scenario } from './scenarios/performance_scenarios.js';
export { prod_impression_scenario } from './scenarios/performance_scenarios.js';
export { prod_event_scenario } from './scenarios/event_scenarios.js';
export { prod_orfad_scenario } from './scenarios/adserver_scenario.js';


globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_event";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_click";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_event_test";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_event_ramp2k";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_orfad_test";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_impression_test";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_click_test";


// load test config, used to populate exported options object:
const testConfig = JSON.parse(open('./config/test.json'));


export const options= {
    insecureSkipTlsVerify: false,
    tags: {
        vm: __ENV.VM_NAME || "default_vm"
    },
    scenarios: {
        [RUN_SCENARIO]: testConfig.scenarios[RUN_SCENARIO],
    }
}

export default function () {
  console.log(`Running scenario: ${RUN_SCENARIO}`);
}