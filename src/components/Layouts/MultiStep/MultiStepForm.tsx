import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/*================ STEPS ===============*/
import { steps } from "./steps.ts";

/*========== FUNCTIONS REDUX ============*/
import {
  resetForm,
  updateForm,
} from "../../../store/formReducer/formReducer.ts";
import { RootState } from "../../../store/store.ts";

/*========== SERVICES ============*/
import { cookieManager } from "../../../services/cookie.ts";
import { toastSuccess } from "../../../services/toastService.ts";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    console.log("Final Form Data:", { ...data });
    cookieManager.set("authToken", "dummyToken", {
      days: 1,
      path: "/",
      secure: true,
      sameSite: "Lax",
    });
    toastSuccess("Successfully logged in!");
    dispatch(resetForm());
  };

  const safeStep = Math.min(Math.max(step, 0), steps.length - 1);
  // Get the current step configuration
  const currentStep = steps[safeStep];

  console.log("Current Step:", currentStep);
  console.log("safeStep:", safeStep);
  console.log("ZADNJI STEP JE:", steps.length - 1);

  return (
    <div>
      <StepComponent
        onNext={step < steps.length - 1 ? handleNext : handleSubmit}
        onBack={step > 0 ? handleBack : () => {}}
        defaultValues={formData}
      />
    </div>
  );
};

export default MultiStepForm;
