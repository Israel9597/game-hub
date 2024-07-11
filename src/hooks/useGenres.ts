import useGeneric from "./useGeneric";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => useGeneric<Genre>("/genres");
export default useGenres;
