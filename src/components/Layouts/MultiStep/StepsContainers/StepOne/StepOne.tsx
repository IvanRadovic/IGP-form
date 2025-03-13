import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

import FormStep from "../../FormStep/FormStep.tsx";

interface StepOneData {
  email: string;
  password: string;
}

interface StepOneProps {
  onNext: (data: StepOneData) => void;
  defaultValues: StepOneData;
}

const StepOne: FC<StepOneProps> = ({ onNext, defaultValues }) => {
  return (
    <FormStep onSubmit={onNext} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepOneData>) => (
        <>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              {...methods.register("email", { required: "Email is required" })}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            {methods.formState.errors.email && (
              <p className="error-text">
                {methods.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...methods.register("password", {
                required: "Password is required",
              })}
              type="password"
              className="form-control"
              placeholder="Password"
            />
            {methods.formState.errors.password && (
              <p className="error-text">
                {methods.formState.errors.password.message}
              </p>
            )}
          </div>
        </>
      )}
    </FormStep>
  );
};

export default StepOne;
