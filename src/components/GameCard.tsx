import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

import GameIcon from "./GameIcon";
import Badges from "./Badges";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginY={1} justifyContent="space-between" marginBottom={3}>
          <HStack spacing={2}>
            <GameIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
          <Badges metrics={game.metacritic} />
        </HStack>
        <Heading fontSize="20px">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
