import { ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

import { DefaultButton } from "../../../ui/button/DefaultButton/DefaultButton.tsx";

/*=========== INTERFACES ============*/
interface FormStepProps<T> {
  children: (methods: UseFormReturn<T>) => ReactNode;
  onSubmit: (data: T) => void;
  defaultValues: T;
  onBack?: () => void;
  isLastStep?: boolean;
}

const FormStep = <T,>({
  children,
  onSubmit,
  defaultValues,
  onBack,
  isLastStep,
}: FormStepProps<T>) => {
  const methods = useForm<T>({ defaultValues });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}

      <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
        {onBack && (
          <DefaultButton type="button" className="button-47" onClick={onBack}>
            Back
          </DefaultButton>
        )}
        <DefaultButton
          type="submit"
          className="button-47"
          style={{
            background: isLastStep ? "#361243" : "#FFFFFF",
            color: isLastStep ? "#FFFFFF" : "black",
          }}
        >
          {isLastStep ? "SIGN UP" : "Next"}
        </DefaultButton>
      </div>
    </form>
  );
};

export default FormStep;
