import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import FormStep from "../../FormStep/FormStep.tsx";

interface FormData {
  address: string;
}

const StepTwo: FC<{ onNext: (data: FormData) => void; onBack: () => void }> = ({
  onNext,
  onBack,
}) => {
  return (
    <FormStep<FormData>
      onSubmit={onNext}
      defaultValues={{ address: "" }}
      onBack={onBack}
    >
      {({ register, formState: { errors } }: UseFormReturn<FormData>) => (
        <>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
            />
            {errors.address && (
              <p className="error-text">{errors.address.message}</p>
            )}
          </div>
        </>
      )}
    </FormStep>
  );
};

export default StepTwo;
