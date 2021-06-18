import fetch from "node-fetch";
const getStatus = async () => {
  const status = await (
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
