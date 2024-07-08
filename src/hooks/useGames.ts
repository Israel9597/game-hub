import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
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
}

interface GameList {
  count: number;
  results: Games[];
}
const useGames = () => {
  const [gameList, setGameList] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameList>("/games", { signal: controller.signal })
      .then((res) => setGameList(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { gameList, error };
};
export default useGames;
