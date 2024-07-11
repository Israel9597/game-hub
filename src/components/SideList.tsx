import { HStack, Image, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  genre: Genre;
  setSelected: (genre: Genre) => void;
}
const SideList = ({ genre, setSelected }: Props) => {
  return (
    <HStack paddingY="5px">
      <Image
        boxSize="32px"
        src={getCroppedImageUrl(genre.image_background)}
        borderRadius={8}
      />
      <Button onClick={() => setSelected(genre)} fontSize="lg" variant="link">
        {genre.name}
      </Button>
    </HStack>
  );
};

export default SideList;
