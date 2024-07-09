import useGenres from "../hooks/useGenres";
import SideList from "./SideList";
const GenreList = () => {
  const { generic } = useGenres();
  return (
    <ul style={{ listStyle: "none" }}>
      {generic.map((genre) => (
        <li key={genre.id}>
          <SideList genre={genre} />
        </li>
      ))}
    </ul>
  );
};
export default GenreList;
