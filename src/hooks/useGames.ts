import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

import useGeneric from "./useGeneric";
import { Genre } from "./useGenres";

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
}

const useGames = (selectedGenre: Genre | null) =>
  useGeneric<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]); // so we passed the (selectedGenre) parameter from the selected genre of parent component then update the api request
// data hook useGeneric gets end point which gets all the games but we can make it more flexible by passing the selected genre to the data hook using axios request config object to select from the endpoint
export default useGames;
