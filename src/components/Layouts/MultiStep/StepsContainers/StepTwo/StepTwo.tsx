import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

import FormStep from "../../FormStep/FormStep.tsx";

interface StepTwoData {
  address: string;
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
          <label htmlFor="address">Address</label>
          <input
            {...methods.register("address", {
              required: "Address is required",
            })}
            type="text"
            className="form-control"
            placeholder="Enter address"
          />
          {methods.formState.errors.address && (
            <p className="error-text">
              {methods.formState.errors.address.message}
            </p>
          )}
        </div>
      )}
    </FormStep>
  );
};

export default StepTwo;
