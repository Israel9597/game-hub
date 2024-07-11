import useGenres, { Genre } from "../hooks/useGenres";
import { Spinner, SkeletonText, List, ListItem } from "@chakra-ui/react";
import SideList from "./SideList";

interface Props {
  onSelectdGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectdGenre }: Props) => {
  const { generic, loading, error } = useGenres();
  const skeletonList = [1, 2, 3, 4, 5, 6, 7, 8];
  error && null;
  return loading ? (
    <List>
      {skeletonList.map((_, index) => (
        <ListItem key={index}>
          <SkeletonText height="80px" width="100%" />
        </ListItem>
      ))}
    </List>
  ) : (
    <List>
      {generic.map((genre) => (
        <ListItem key={genre.id}>
          <SideList
            genre={genre}
            setSelected={(x: Genre) => onSelectdGenre(x)}
          />
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
