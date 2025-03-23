/*======= FUNCTIONS ========*/
import { apiCall } from "../../apiCall.ts";

/*======= INTERFACE ========*/
import { Game, CategoryGames } from "./interface.ts";

/**
 * @apiService getGames
 * @description Get games from the API and call the onSuccess or onError function
 * @endpoint /games/desktop.json
 * @method GET - Fetch games from the API
 * @interface Game - Game interface
 * @param onSuccess - Function to call when the API call is successful and returns data
 * @param onError - Function to call when the API call is unsuccessful and returns an error
 * @returns void
 * @example
 * getGames( (data) => {
 *  console.log(data);
 *  // Output: [ { id: 1, demoMode: false, type: "slot", ... }, { id: 2, demoMode: true, type: "table", ... } ]
 *  }, (error) => {
 *  console.log(error);
 *  // Output: Request failed with status code 404
 *  });
 */
export const getGames = (
  onSuccess: (data: Game[]) => void,
  onError: (error: any) => void,
) => {
  apiCall<Game[]>({
    method: "get",
    url: `/games/desktop.json`,
    onSuccess,
    onError,
  });
};

/*===========================================================================*/

/**
 * @apiService getCategoryGames
 * @description  Get category games from the API and call the onSuccess or onError function
 * @endpoint /game-categories/extended.json
 * @method GET - Fetch category games from the API
 * @interface CategoryGames - CategoryGames interface
 * @param onSuccess - Function to call when the API call is successful and returns data
 * @param onError - Function to call when the API call is unsuccessful and returns an error
 * @returns void
 * @example
 * getCategoryGames( (data) => {
 * console.log(data);
 * // Output: [ { id: 1, slug: "slot", portal: "desktop", ... }, { id: 2, slug: "table", portal: "desktop", ... } ]
 * }, (error) => {
 * console.log(error);
 * // Output: Request failed with status code 404
 * });
 */
export const getCategoryGames = (
  onSuccess: (data: CategoryGames[]) => void,
  onError: (error: any) => void,
) => {
  apiCall<CategoryGames[]>({
    method: "get",
    url: "/game-categories/extended.json",
    onSuccess,
    onError,
  });
};

/*===========================================================================*/
