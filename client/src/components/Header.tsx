import { Text } from "@chakra-ui/layout";
import React from "react";
import { useState, useEffect } from "react";
import { getStatus } from "../api/api";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import ThemePicker from "./ThemePicker";

const Header: React.FC = () => {
  const [status, setStatus] = useState("");
  const [alert, setAlert] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    getStatus().then((status) => {
      setStatus(status.message);
      setAlert(status.alert);
    });
  }, []);
  return (
    <div>
      <ThemePicker />
      <VStack>
        <Box>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color={
              colorMode === "dark"
                ? "red." + alert * 2 + "00"
                : "pink." + alert * 2 + "00"
            }
          >
            Currently : {status}, {alert}
          </Text>
        </Box>
      </VStack>
    </div>
  );
};

export default Header;
