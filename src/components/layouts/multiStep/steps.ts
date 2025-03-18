/*========== COMPONENTS ==============*/
import StepOne from "./stepsContainers/stepOne/StepOne.tsx";
import StepTwo from "./stepsContainers/stepTwo/StepTwo.tsx";

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
