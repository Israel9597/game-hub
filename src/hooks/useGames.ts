import { GameQuery } from "../App";
import useGeneric from "./useGeneric";
import { Genre } from "./useGenres";
//import { Platform } from "../../../../game-hub/src/hooks/useGames";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface ResultGenre {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //we have to define another interface to get the platform properties
  metacritic: number;
  genres: ResultGenre[];
  platforms: Platform[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useGeneric<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  ); // so we passed the (selectedGenre) parameter from the selected genre of parent component then update the api request
// data hook useGeneric gets end point which gets all the games but we can make it more flexible by passing the selected genre to the data hook using axios request config object to select from the endpoint
export default useGames;
