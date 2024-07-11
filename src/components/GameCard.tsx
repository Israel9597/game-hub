import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

import GameIcon from "./GameIcon";
import Badges from "./Badges";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="20px">{game.name}</Heading>

        <HStack marginY={1} justifyContent="space-between">
          <HStack spacing={2}>
            <GameIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
          <Badges metrics={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
