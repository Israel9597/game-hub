import { useColorMode, Switch, Text, HStack } from "@chakra-ui/react";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" onChange={toggleColorMode} />
      {colorMode === "light" ? (
        <Text whiteSpace="nowrap">Dark Mode</Text>
      ) : (
        <Text whiteSpace="nowrap">Light Mode</Text>
      )}
    </HStack>
  );
};

export default DarkModeToggle;
