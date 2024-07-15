import useGeneric from "./useGeneric";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useGeneric<Platform>("/platforms/lists/parents");
export default usePlatforms;
