import React, { FC, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import StatusContext from "./StatusContext";

const App: FC = () => {
  const [status, setStatus] = useState({ id: 1, message: "Unknown", alert: 0 });

  return (
    <div>
      <StatusContext.Provider value={{ status, setStatus }}>
        <Header></Header>
        <Form></Form>
      </StatusContext.Provider>
    </div>
  );
};

export default App;
