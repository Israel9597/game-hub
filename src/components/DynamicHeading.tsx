import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const DynamicHeading = ({ gameQuery }: Props) => {
  const headings = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={4} marginTop={4}>
      {headings}
    </Heading>
  );
};

export default DynamicHeading;
