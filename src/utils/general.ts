/**
 * @name getFilteredData
 * @descripti Get filtered data based on fields step and names
 * @param data - object with fields
 * @param step - number of step
 * @param names - array of names to filter
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
