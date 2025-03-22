/**
 * @name getFilteredData
 * @descripti Get filtered data based on fields step and names to filter
 * @param data - object with fields to filter
 * @param step - number of step to filter
 * @param names - array of names to filter
 * @returns - filtered data
 */
export const getFilteredData = (
  data: object,
  step: number,
  names: string[],
) => {
  return data.fields.filter(
    (item) => item.step === step && names.includes(item.code),
  );
};
