interface Validator {
  key: string;
  name: string;
  warning: boolean;
  invalid_message: string;
  description: string;
  parameters: Record<string, any>;
}

interface ValueList {
  order: number;
  value: string;
  name: string;
  isNumber?: boolean;
}

interface Field {
  code: string;
  name: string;
  fieldType: string;
  dataType: string;
  order: number;
  defaultValue: string;
  required: boolean;
  step: number;
  valueList: ValueList[];
  validators: Validator[];
}

export interface generateInputs {
  fields: Field[];
}
