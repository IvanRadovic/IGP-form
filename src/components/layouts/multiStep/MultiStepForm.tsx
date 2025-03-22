import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*================ STEPS ===============*/
import { STEPS } from "./STEPS.ts";

/*========== FUNCTIONS REDUX ============*/
import {
  resetForm,
  updateForm,
} from "../../../store/formReducer/formReducer.ts";
import { RootState } from "../../../store/store.ts";

/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";
import { toastSuccess } from "../../../utils/toastService.ts";

/**
 * @name MultiStepForm component for multi-step form
 * @description - Main component for multi-step form functionality, it handles the steps and form data and passes it to the respective step component
 * @param setLoading - function to set loading state in parent component
 *
 */
const MultiStepForm: React.FC<{ setLoading: (value: boolean) => void }> = ({
  setLoading,
}) => {
  const [step, setStep] = useState(0);
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const StepComponent = STEPS[step].component;

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

    setLoading(true);

    setTimeout(() => {
      cookieManager.set("authToken", "dummyToken", {
        days: 1,
        path: "/",
        secure: true,
        sameSite: "Lax",
      });
      cookieManager.set("username", data.username.toString(), {});
      toastSuccess("Welcome to Monkey Casino!");
      dispatch(resetForm());
    }, 5000);
  };

  return (
    <div>
      <StepComponent
        onNext={step < STEPS.length - 1 ? handleNext : handleSubmit}
        onBack={step > 0 ? handleBack : () => {}}
        defaultValues={formData}
        isLastStep={step === STEPS.length - 1}
      />
    </div>
  );
};

export default MultiStepForm;
