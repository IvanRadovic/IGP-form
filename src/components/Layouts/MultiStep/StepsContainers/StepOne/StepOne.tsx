import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../FormStep/FormStep.tsx";

import data from "../../../../../config/sampleData.json";

/*============= INTERFACE ===============*/
interface StepOneData {
  name: string;
  lastName: string;
}
interface StepOneProps {
  onNext: (data: StepOneData) => void;
  defaultValues: StepOneData;
}

const StepOne: FC<StepOneProps> = ({ onNext, defaultValues }) => {
  const filteredData = data.fields.filter(
    (item) => item.code === "fname" || item.code === "lname",
  );

  console.log("filteredData", filteredData);

  return (
    <FormStep onSubmit={onNext} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepOneData>) => (
        <>
          <div className="form-group">
            <label htmlFor="name">Enter name</label>
            <input
              {...methods.register("name", { required: "Email is required" })}
              type="name"
              className="form-control"
              placeholder="Enter name"
            />
            {methods.formState.errors.name && (
              <p className="error-text">
                {methods.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              {...methods.register("lastName", {
                required: "Password is required",
              })}
              type="lastName"
              className="form-control"
              placeholder="Password"
            />
            {methods.formState.errors.lastName && (
              <p className="error-text">
                {methods.formState.errors.lastName.message}
              </p>
            )}
          </div>
        </>
      )}
    </FormStep>
  );
};

export default StepOne;
