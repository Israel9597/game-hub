import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSekeleton from "./LoadingSekeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { generic, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      {
        <>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {loading &&
              skeletons.map((each) => (
                <GameCardContainer>
                  <LoadingSekeleton key={each} />
                </GameCardContainer>
              ))}
            {generic.map((games) => (
              <GameCardContainer>
                <GameCard key={games.id} game={games} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        </>
      }
    </div>
  );
};

export default GameGrid;
