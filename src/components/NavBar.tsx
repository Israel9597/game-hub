import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeToggle from "./DarkModeToggle";
import Search from "./Search";

interface Props {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Image boxSize="60px" src={logo} />
      <Search onSearch={onSearch} />

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
