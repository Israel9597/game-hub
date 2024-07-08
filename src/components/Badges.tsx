import { Badge } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
  metrics: number;
}

const Badges = ({ metrics }: Props) => {
  const colorScheme = metrics > 85 ? "green" : metrics > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={colorScheme}
    >
      {metrics}
    </Badge>
  );
};

export default Badges;
