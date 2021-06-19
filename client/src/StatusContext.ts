import React, { createContext, SetStateAction } from "react";

interface HookType {
  status: status;
  setStatus: React.Dispatch<SetStateAction<status>>;
}

interface status {
  id: number;
  message: string;
  alert: number;
}

const StatusContext = createContext<HookType | null>(null);

export default StatusContext;
