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
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatForm: Platform | null
) =>
  useGeneric<Games>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatForm?.id,
      },
    },
    [selectedGenre?.id, selectedPlatForm?.id]
  ); // so we passed the (selectedGenre) parameter from the selected genre of parent component then update the api request
// data hook useGeneric gets end point which gets all the games but we can make it more flexible by passing the selected genre to the data hook using axios request config object to select from the endpoint
export default useGames;
