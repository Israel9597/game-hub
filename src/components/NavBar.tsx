import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeToggle from "./DarkModeToggle";
import Search from "./Search";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image boxSize="60px" src={logo} />
      <Search />

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
