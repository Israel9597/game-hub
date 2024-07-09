import { Platform } from "../hooks/useGames";
import { Icon } from "@chakra-ui/react";
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const GameIcon = ({ platforms }: Props) => {
  const gameIcon: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={gameIcon[platform.slug]} color="gray.500" />
      ))}
    </>
  );
};

export default GameIcon;
