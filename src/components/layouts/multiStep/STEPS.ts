/*========== COMPONENTS ==============*/
import StepOne from "./stepsContainers/stepOne/StepOne.tsx";
import StepTwo from "./stepsContainers/stepTwo/StepTwo.tsx";

/**
 * @name STEPS
 * @description - Array of steps to be rendered in multi-step form - each step has a component and a key for identification
 * @param component - component to be rendered for the step - each component is a step in the multi-step form
 * @param key - key to identify the step
 */
export const STEPS = [
  {
    component: StepOne,
    key: "step1",
  },
  {
    component: StepTwo,
    key: "step2",
  },
];
