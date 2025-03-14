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
  acceptedTerms: boolean;
  isLastStep: boolean;
}
interface StepTwoProps {
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
  defaultValues: StepTwoData;
}

const StepTwo: FC<StepTwoProps> = ({
  onNext,
  onBack,
  defaultValues,
  isLastStep,
}) => {
  const filteredData = getFilteredData(data, 1, [
    "username",
    "password",
    "password_confirm",
  ]);

  return (
    <FormStep
      onSubmit={onNext}
      onBack={onBack}
      defaultValues={defaultValues}
      isLastStep={isLastStep}
    >
      {(methods: UseFormReturn<StepTwoData>) => (
        <>
          {/* ========== INPUTI ZA USERNAME, PASSWORD I PASSWORD CONFIRM ========== */}
          {filteredData.map((item) => (
            <div className="form-group mb-2" key={item.code}>
              <label className="labels" htmlFor={item.code}>
                {item.name}
              </label>
              <input
                {...methods.register(
                  item.code as keyof StepTwoData,
                  getValidations(
                    item.validators,
                    item.required,
                    methods.getValues,
                  ),
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

          {/* ========== CHECKBOX ZA TERMS & CONDITIONS ========== */}
          <div className="form-group mb-3">
            <input
              type="checkbox"
              id="acceptedTerms"
              {...methods.register("acceptedTerms", {
                required: "You must accept the terms and conditions",
              })}
              className="form-check-input"
            />
            <label
              className="form-check-label ms-2 labels"
              htmlFor="acceptedTerms"
            >
              I accept the terms and conditions
            </label>
            {methods.formState.errors.acceptedTerms && (
              <p className="error-text">
                {methods.formState.errors.acceptedTerms.message}
              </p>
            )}
          </div>
        </>
      )}
    </FormStep>
  );
};

export default StepTwo;
