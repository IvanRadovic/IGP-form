/*========== COMPONENTS ==============*/
import StepOne from "./StepsContainers/StepOne/StepOne.tsx";
import StepTwo from "./StepsContainers/StepTwo/StepTwo.tsx";

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
