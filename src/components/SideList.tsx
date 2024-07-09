import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  genre: Genre;
}
const SideList = ({ genre }: Props) => {
  return (
    <HStack paddingY="5px">
      <Image
        boxSize="32px"
        src={getCroppedImageUrl(genre.image_background)}
        borderRadius={8}
      />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  );
};

export default SideList;
