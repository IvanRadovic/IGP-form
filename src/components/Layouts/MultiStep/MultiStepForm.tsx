import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*================ STEPS ===============*/
import { steps } from "./steps.ts";

/*========== FUNCTIONS REDUX ============*/
import { updateForm } from "../../../store/formReducer/formReducer.ts";
import { RootState } from "../../../store/store.ts";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  // show the current step
  const StepComponent = steps[step].component;

  const handleNext = (data: Partial<typeof formData>) => {
    dispatch(updateForm(data));
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: Partial<typeof formData>) => {
    dispatch(updateForm(data));
    console.log("Final Form Data:", { ...formData, ...data });
  };

  return (
    <div>
      <StepComponent
        onNext={step < steps.length - 1 ? handleNext : handleSubmit}
        onBack={step > 0 ? handleBack : undefined}
        defaultValues={formData}
      />
    </div>
  );
};

export default MultiStepForm;
