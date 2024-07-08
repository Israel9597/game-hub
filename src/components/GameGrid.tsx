import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { gameList, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {gameList.map((games) => (
          <GameCard key={games.id} game={games} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
