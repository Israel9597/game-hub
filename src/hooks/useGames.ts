import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useGeneric from "./useGeneric";

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

const useGames = () => useGeneric<Games>("/games");
export default useGames;
