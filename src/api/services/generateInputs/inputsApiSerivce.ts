/* ============= INTERFACE =============*/
import { generateInputs } from "./interface.ts";

import { apiCall } from "../../apiCall.ts";
import { inputsApi } from "../../config.ts";

export const getDynamicInputs = (
  onSuccess: (data: generateInputs[]) => void,
  onError: (error: any) => void,
) => {
  apiCall<generateInputs[]>({
    method: "get",
    url: `/gist/IvanRadovic/2d5d3fc5acfb6445b6302b585026ffe5/raw/22668237c80a902bc4aab86005173fc5aede2c3b/inputs.json`,
    onSuccess,
    onError,
    apiInstance: inputsApi,
  });
};
