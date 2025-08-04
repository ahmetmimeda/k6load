//export { first_scenario } from './scenarios/scenario1.js';
export { prod_click_scenario } from './scenarios/click_scenarios.js';
export { prod_event_scenario } from './scenarios/event_scenarios.js';


globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 1;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 5;
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_event";
globalThis.RUN_SCENARIO = __ENV.SCENARIO || "prod_click";

// load test config, used to populate exported options object:
const testConfig = JSON.parse(open('./config/test.json'));

const selectedScenario = {
  scenarios: {
    [RUN_SCENARIO]: testConfig.scenarios[RUN_SCENARIO],
  },
};

export const options = Object.assign(
  {
    insecureSkipTlsVerify: false,
  },
  selectedScenario
);

export default function () {
  console.log(`Running scenario: ${RUN_SCENARIO}`);
}