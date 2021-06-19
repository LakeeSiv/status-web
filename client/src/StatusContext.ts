import React, { createContext, SetStateAction } from "react";

interface HookType {
  status: status;
  setStatus: React.Dispatch<SetStateAction<status>>;
}

export interface status {
  id: number;
  message: string;
  alert: number;
}

const StatusContext = createContext<HookType>({
  status: { id: 1, message: "Unknown", alert: 0 },
  setStatus: () => {},
});

export default StatusContext;
