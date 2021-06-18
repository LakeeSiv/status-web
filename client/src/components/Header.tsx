import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useState, useEffect } from "react";
import { getStatus } from "../api/api";

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
      <Heading>
        {status}, {alert}
      </Heading>
    </div>
  );
};

export default Header;
