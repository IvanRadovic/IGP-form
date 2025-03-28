import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

/*========== COMPONENTS ==============*/
import FormStep from "../../formStep/FormStep.tsx";

/*========== FIELDS ===============*/
import data from "../../../../../config/sampleData.json";
import { getValidations } from "../../../../../schemas/validationSchemas.ts";
import { getFilteredData } from "../../../../../utils/general.ts";

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

/**
 * @component StepTwo component for multi-step form - Step 2
 * @description - Takes form fields from sampleData.json and renders them in a form for step 2 in this case username, password, password_confirm and acceptedTerms
 * @interface StepTwoProps - interface for StepTwo component
 * @interface StepTwoData - interface for form fields in step
 * @param onNext - function to be called on next button click (submit) - if it is last step it will call onSubmit function from FormStep
 * @param onBack - function to be called on back button click - if it is first step it will not do anything (empty function)
 * @param defaultValues - default values for form fields - initial values for form fields
 * @param isLastStep - boolean to check if it is last step - if it is last step it will render submit button with text "SIGN UP" otherwise "Next"
 * @containedComponents - FormStep component
 *
 */
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
          <div className="form-group mb-3 mt-3">
            <input
              type="checkbox"
              id="acceptedTerms"
              {...methods.register("acceptedTerms", {
                required: "You must accept the terms and conditions",
              })}
              className="form-check-input"
              style={{ width: "1.6rem", height: "1.6rem" }}
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
