import { useEffect, useState } from "react";

/*======= HOOKS ===========*/
import { useFetchData } from "../../hooks/useFetchData.ts";

/*======= API SERVICES ===========*/
import { getGames } from "../../api/services/games/gamesApiService.ts";

/*======= INTERFACES ===========*/
import { Game } from "../../api/services/games/interface.ts";

const HomePage = () => {
  const {
    data: games,
    loading: loadingGames,
    error: errorGames,
  } = useFetchData<Game[]>(getGames, 1);

  console.log("Response", games?.slice(0, 100));

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
