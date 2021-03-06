import { Text } from "@chakra-ui/layout";
import React from "react";
import { useContext, useEffect } from "react";
import { getStatus } from "../api/api";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import StatusContext from "../StatusContext";

const Header: React.FC = () => {
  const { status, setStatus } = useContext(StatusContext);
  const { colorMode } = useColorMode();

  useEffect(() => {
    getStatus().then((status) => {
      setStatus(status);
    });
  }, [setStatus]);
  return (
    <div>
      <VStack>
        <Box width={"50vw"}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color={
              colorMode === "dark"
                ? "red." + status.alert * 1 + "00"
                : "pink." + status.alert * 1 + "00"
            }
            mb={4}
            textAlign="center"
          >
            {status.message}
          </Text>
        </Box>
      </VStack>
    </div>
  );
};

export default Header;
