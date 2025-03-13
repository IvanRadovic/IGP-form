import { ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

/*=========== INTERFACES ============*/
interface FormStepProps<T> {
  children: (methods: UseFormReturn<T>) => ReactNode;
  onSubmit: (data: T) => void;
  defaultValues: T;
  onBack?: () => void;
}

const FormStep = <T,>({
  children,
  onSubmit,
  defaultValues,
  onBack,
}: FormStepProps<T>) => {
  const methods = useForm<T>({ defaultValues });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}

      <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
        {onBack && (
          <button type="button" className="button-47" onClick={onBack}>
            Back
          </button>
        )}
        <button type="submit" className="button-47">
          Next
        </button>
      </div>
    </form>
  );
};

export default FormStep;
