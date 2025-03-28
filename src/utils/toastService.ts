import { toast, ToastPosition } from "react-hot-toast";

const DURATION = 3000;
const POSITION: ToastPosition = "top-center";

/**
 * @name toastSuccess
 * @description Display a success toast message with the given text.
 * @param message
 */
export const toastSuccess = (message: string): void => {
  toast.success(message, {
    duration: DURATION,
    position: POSITION,
  });
};

/**
 * @name toastError
 * @description Display an error toast message with the given text.
 * @param message
 *
 * @example
 * toastError("An error occurred. Please try again later.");
 */

export const toastError = (message: string): void => {
  toast.error(message, {
    duration: DURATION,
    position: POSITION,
  });
};

/**
 * @name toastInformation
 * @description Display an information toast message with the given text.
 * @param message
 *
 * @example
 * toastInformation("Please note that this action is irreversible.");
 */
export const toastInformation = (message: string): void => {
  toast(message, {
    duration: DURATION * 2,
    position: POSITION,
    icon: "🛈",
  });
};
