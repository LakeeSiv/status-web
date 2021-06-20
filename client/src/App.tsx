import React, { FC, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import Header from "./components/Header";
import Form from "./components/Form";
import StatusContext from "./StatusContext";
import ThemePicker from "./components/ThemePicker";
import { useColorMode } from "@chakra-ui/color-mode";

const App: FC = () => {
  const [status, setStatus] = useState({ id: 1, message: "Unknown", alert: 0 });
  const { colorMode } = useColorMode();

  return (
    <div>
      <StatusContext.Provider value={{ status, setStatus }}>
        <ThemePicker></ThemePicker>
        <Flex justifyContent="center">
          <Box
            bg={colorMode === "dark" ? "gray.700" : "teal.700"}
            mt={5}
            py={10}
            width={{ lg: "60%", base: "80%" }}
            borderRadius={8}
          >
            <Header></Header>
            <Form></Form>
          </Box>
        </Flex>
      </StatusContext.Provider>
    </div>
  );
};

export default App;
