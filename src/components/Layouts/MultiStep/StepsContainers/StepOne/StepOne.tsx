import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../FormStep/FormStep.tsx";

/*========== VALIDATIONS ===============*/
import { getValidations } from "../../../../../schemas/validationSchemas.ts";

/*========== FIELDS ===============*/
import data from "../../../../../config/sampleData.json";

/*========== SERVICES ===============*/
import { getFilteredData } from "../../../../../services/general.ts";

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

const StepOne: FC<StepOneProps> = ({ onNext, defaultValues }) => {
  const filteredData = getFilteredData(data, 1, ["fname", "lname", "email"]);

  return (
    <FormStep onSubmit={onNext} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepOneData>) => (
        <>
          {filteredData.map((item) => (
            <div className="form-group" key={item.code}>
              <label htmlFor={item.code}>{item.name}</label>
              <input
                {...methods.register(
                  item.code as keyof StepOneData,
                  getValidations(item.validators, item.required),
                )}
                type="text"
                className="form-control"
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
