import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../FormStep/FormStep.tsx";

/*========== FIELDS ===============*/
import data from "../../../../../config/sampleData.json";
import { getValidations } from "../../../../../schemas/validationSchemas.ts";

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
  const filteredData = data.fields.filter(
    (item) =>
      item.step === 1 &&
      ["username", "password", "password_confirm"].includes(item.code),
  );
  return (
    <FormStep onSubmit={onNext} onBack={onBack} defaultValues={defaultValues}>
      {(methods: UseFormReturn<StepTwoData>) => (
        <>
          {filteredData.map((item) => (
            <div className="form-group" key={item.code}>
              <label htmlFor={item.code}>{item.name}</label>
              <input
                {...methods.register(
                  item.code as keyof StepTwoData,
                  getValidations(item.validators, item.required),
                )}
                type={item.fieldType}
                className="form-control"
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
