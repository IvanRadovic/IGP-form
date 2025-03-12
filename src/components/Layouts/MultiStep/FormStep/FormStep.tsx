import { ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

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

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {onBack && (
          <button type="button" onClick={onBack}>
            Back
          </button>
        )}
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default FormStep;
