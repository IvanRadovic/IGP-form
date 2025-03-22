import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../formStep/FormStep.tsx";

/*========== VALIDATIONS ===============*/
import { getValidations } from "../../../../../schemas/validationSchemas.ts";

/*========== FIELDS ===============*/
import data from "../../../../../config/sampleData.json";

/*========== SERVICES ===============*/
import { getFilteredData } from "../../../../../utils/general.ts";

/*============= INTERFACE ===============*/
interface StepOneData {
  fname: string;
  lname: string;
  email: string;
}
interface StepOneProps {
  onNext: (data: StepOneData) => void;
  defaultValues: StepOneData;
}

/**
 * @name StepOne component for multi-step form - Step 1
 * @Description - Takes form fields from sampleData.json and renders them in a form for step 1 in this case fname, lname, email
 * @param onNext - function to be called on next button click
 * @param defaultValues - default values for form fields
 *
 */
const StepOne: FC<StepOneProps> = ({ onNext, defaultValues }) => {
  const filteredData = getFilteredData(data, 1, ["fname", "lname", "email"]);

  return (
    <FormStep onSubmit={onNext} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepOneData>) => (
        <>
          {filteredData.map((item) => (
            <div className="form-group mb-2" key={item.code}>
              <label className="labels" htmlFor={item.code}>
                {item.name}
              </label>
              <input
                {...methods.register(
                  item.code as keyof StepOneData,
                  getValidations(item.validators, item.required),
                )}
                type="text"
                className="form-control inputs"
                placeholder={`Enter ${item.name.toLowerCase()}`}
              />
              {methods.formState.errors[item.code as keyof StepOneData] && (
                <p className="error-text">
                  {
                    methods.formState.errors[item.code as keyof StepOneData]
                      ?.message
                  }
                </p>
              )}
            </div>
          ))}
        </>
      )}
    </FormStep>
  );
};

export default StepOne;
