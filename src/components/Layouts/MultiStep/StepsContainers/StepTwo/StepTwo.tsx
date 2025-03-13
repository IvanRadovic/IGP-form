import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../FormStep/FormStep.tsx";

/*============= INTERFACE ===============*/
interface StepTwoData {
  username: string;
}

interface StepTwoProps {
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
  defaultValues: StepTwoData;
}

const StepTwo: FC<StepTwoProps> = ({ onNext, onBack, defaultValues }) => {
  return (
    <FormStep onSubmit={onNext} onBack={onBack} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepTwoData>) => (
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            {...methods.register("username", {
              required: "Address is required",
            })}
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
          {methods.formState.errors.username && (
            <p className="error-text">
              {methods.formState.errors.username.message}
            </p>
          )}
        </div>
      )}
    </FormStep>
  );
};

export default StepTwo;
