import fetch from "node-fetch";
interface status {
  id: number;
  message: string;
  alert: number;
}

const getStatus = async (): Promise<status> => {
  const status: status = await (
    await fetch("https://status-web.lakeesiv.repl.co/api")
  ).json();
  return status;
};

const postStatus = async (message: string, alert: number) => {
  const body: object = { pass: "a", message: message, alert: alert };
  await fetch("https://status-web.lakeesiv.repl.co/api", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
};

export { getStatus, postStatus };
