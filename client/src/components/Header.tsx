import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useState, useEffect } from "react";
import { getStatus } from "../api/api";
import { VStack, Box } from "@chakra-ui/react";
import ThemePicker from "./ThemePicker";
const Header: React.FC = () => {
  const [status, setStatus] = useState("");
  const [alert, setAlert] = useState(0);

  useEffect(() => {
    getStatus().then((status) => {
      setStatus(status.message);
      setAlert(status.alert);
    });
  }, []);
  return (
    <div>
      <VStack>
        <ThemePicker />
        <Box>
          <Heading>
            {status}, {alert}
          </Heading>
        </Box>
      </VStack>
    </div>
  );
};

export default Header;
