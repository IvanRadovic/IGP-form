/**
 * Get validations for a field based on the validators and isRequired
 * @param validators - List of validators for the field
 * @param isRequired - If the field is required
 * @returns - Object with the validations for the field
 * @example
 * getValidations(validators, isRequired)
 */
// validationSchemas.ts
export const getValidations = (
  validators: any[],
  isRequired: boolean,
  getValues?: (field: string) => any,
) => {
  const rules: any = {};

  if (isRequired) {
    rules.required = {
      value: true,
      message: "Field is required",
    };
  }

  validators.forEach((validator) => {
    switch (validator.key) {
      case "minLength":
        rules.minLength = {
          value: validator.parameters.targetLength,
          message: validator.invalid_message,
        };
        break;
      case "maxLength":
        rules.maxLength = {
          value: validator.parameters.targetLength,
          message: validator.invalid_message,
        };
        break;
      case "emailValidator":
        rules.pattern = {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: validator.invalid_message,
        };
        break;
      case "matchesField":
        rules.validate = (value: string) =>
          value === getValues?.(validator.parameters.target) ||
          validator.invalid_message;
        break;
      default:
        break;
    }
  });

  return rules;
};
