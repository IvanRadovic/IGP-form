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
import { cookieManager } from "../../../utils/cookie.ts";
import { toastSuccess } from "../../../utils/toastService.ts";

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
    cookieManager.set("username", data.username.toString(), {});
    toastSuccess("Welcome to Monkey Casino!");
    dispatch(resetForm());
  };

  return (
    <div>
      <StepComponent
        onNext={step < steps.length - 1 ? handleNext : handleSubmit}
        onBack={step > 0 ? handleBack : () => {}}
        defaultValues={formData}
        isLastStep={step === steps.length - 1}
      />
    </div>
  );
};

export default MultiStepForm;
