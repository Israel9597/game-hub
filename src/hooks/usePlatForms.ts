import platForms from "../data/platForms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ generic: platForms, error: false });
export default usePlatforms;
