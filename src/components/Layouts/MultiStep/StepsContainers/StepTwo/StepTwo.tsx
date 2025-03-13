import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../FormStep/FormStep.tsx";

/*========== FIELDS ===============*/
import data from "../../../../../config/sampleData.json";
import { getValidations } from "../../../../../schemas/validationSchemas.ts";
import { getFilteredData } from "../../../../../services/general.ts";

/*============= INTERFACE ===============*/
interface StepTwoData {
  username: string;
  password: string;
  password_confirm: string;
}

interface StepTwoProps {
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
  defaultValues: StepTwoData;
}

const StepTwo: FC<StepTwoProps> = ({ onNext, onBack, defaultValues }) => {
  const filteredData = getFilteredData(data, 1, [
    "username",
    "password",
    "password_confirm",
  ]);

  return (
    <FormStep onSubmit={onNext} onBack={onBack} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepTwoData>) => (
        <>
          {filteredData.map((item) => (
            <div className="form-group mb-2" key={item.code}>
              <label className="labels" htmlFor={item.code}>
                {item.name}
              </label>
              <input
                {...methods.register(
                  item.code as keyof StepTwoData,
                  getValidations(item.validators, item.required),
                )}
                type={item.fieldType}
                className="form-control inputs"
                placeholder={`Enter ${item.name.toLowerCase()}`}
              />
              {methods.formState.errors[item.code as keyof StepTwoData] && (
                <p className="error-text">
                  {
                    methods.formState.errors[item.code as keyof StepTwoData]
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

export default StepTwo;
