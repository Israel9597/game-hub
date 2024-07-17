import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSekeleton from "./LoadingSekeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { generic, error, loading } = useGames(gameQuery); // has to make update on the API call of the games with the selcted genre
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div>
      {error && <Text>{error}</Text>}
      {
        <>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {loading
              ? skeletons.map((each) => (
                  <GameCardContainer key={each}>
                    <LoadingSekeleton />
                  </GameCardContainer>
                ))
              : generic.map((games) => (
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
