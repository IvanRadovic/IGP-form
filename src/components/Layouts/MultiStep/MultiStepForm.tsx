import { useState } from "react";

/*================ CONSTANTS ===============*/
import { steps } from "./steps.ts";

interface FormData {
  email: string;
  password: string;
  address: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    address: "",
  });

  const StepComponent = steps[step].component;

  const handleNext = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: Partial<FormData>) => {
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
  };

  return (
    <div>
      <StepComponent
        onNext={step < steps.length - 1 ? handleNext : handleSubmit}
        onBack={step > 0 ? handleBack : undefined}
      />
    </div>
  );
};

export default MultiStepForm;
