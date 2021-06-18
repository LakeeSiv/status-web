import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useState, useEffect } from "react";
import { getStatus } from "../api/api";

const Header = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    getStatus().then((status) => setStatus(status.message));
  }, []);
  return (
    <div>
      <Heading>{status}</Heading>
    </div>
  );
};

export default Header;
