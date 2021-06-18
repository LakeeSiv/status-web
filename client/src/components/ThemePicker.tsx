import React from "react";
import { IconButton, useColorMode, Box } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemePicker: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        aria-label="hi"
        colorScheme={colorMode}
        onClick={toggleColorMode}
        variant="ghost"
        size="lg"
        icon={
          colorMode === "light" ? <FaSun size={30} /> : <FaMoon size={30} />
        }
        alignSelf="flex-end"
      />
    </Box>
  );
};

export default ThemePicker;
