import { useEffect, useState } from "react";

/*======= API SERVICES ===========*/
import { getGames } from "../../api/services/games/gamesApiService.ts";

/*======= INTERFACES ===========*/
import { Game } from "../../api/services/games/interface.ts";

const HomePage = () => {
  const [games, setGames] = useState<Game[]>([]);

  const showGames = () => {
    getGames(
      (data) => {
        const limitedData = data.slice(0, 10);
        setGames(limitedData);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    showGames();
  }, []);

  console.log(
    "RESPONSE GAMES",
    games.map((game) => game.name),
  );

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
