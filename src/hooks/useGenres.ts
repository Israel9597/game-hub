import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => ({ generic: genres, loading: false, error: null });
export default useGenres;
