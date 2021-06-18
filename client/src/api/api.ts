import fetch from "node-fetch";
const getStatus = async () => {
  const status = await (
    await fetch("https://status-web.lakeesiv.repl.co/api")
  ).json();
  return status;
};

export { getStatus };
