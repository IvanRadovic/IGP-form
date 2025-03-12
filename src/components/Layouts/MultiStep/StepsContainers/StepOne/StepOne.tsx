import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import FormStep from "../../FormStep/FormStep.tsx";

interface FormData {
  email: string;
  password: string;
}

const StepOne: FC<{ onNext: (data: FormData) => void }> = ({ onNext }) => {
  return (
    <FormStep<FormData>
      onSubmit={onNext}
      defaultValues={{ email: "", password: "" }}
    >
      {({ register, formState: { errors } }: UseFormReturn<FormData>) => (
        <>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-danger mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger mt-1">{errors.password.message}</p>
            )}
          </div>
        </>
      )}
    </FormStep>
  );
};

export default StepOne;
