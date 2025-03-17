/*========== COMPONENTS ==============*/
import StepOne from "./stepsContainers/StepOne/StepOne.tsx";
import StepTwo from "./stepsContainers/StepTwo/StepTwo.tsx";

export const steps = [
  {
    component: StepOne,
    key: "step1",
  },
  {
    component: StepTwo,
    key: "step2",
  },
];
