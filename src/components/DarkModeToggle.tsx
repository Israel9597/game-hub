import { useColorMode, Switch, Text } from "@chakra-ui/react";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Switch colorScheme="green" size="md" onChange={toggleColorMode}>
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Switch>
    </header>
  );
};

export default DarkModeToggle;
