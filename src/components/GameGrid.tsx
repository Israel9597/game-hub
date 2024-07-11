import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSekeleton from "./LoadingSekeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  filtredGenere: Genre | null;
}
const GameGrid = ({ filtredGenere }: Props) => {
  const { generic, error, loading } = useGames(filtredGenere); // has to make update on the API call of the games with the selcted genre
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      {
        <>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {loading &&
              skeletons.map((each) => (
                <GameCardContainer key={each}>
                  <LoadingSekeleton />
                </GameCardContainer>
              ))}
            {generic.map((games) => (
              <GameCardContainer key={games.id}>
                <GameCard game={games} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        </>
      }
    </div>
  );
};

export default GameGrid;
