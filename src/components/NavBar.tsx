import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image boxSize="60px" src={logo} />
      <Text>The Game Hub</Text>

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
