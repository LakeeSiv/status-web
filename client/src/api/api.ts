import fetch from "node-fetch";
interface status {
  id: number;
  message: string;
  alert: number;
}

interface PostObj {
  message: string;
  alert: number;
  pass?: string;
}

const link: string = process.env.REACT_APP_LINK as string;

const getStatus = async (): Promise<status> => {
  const status: status = await (await fetch(link)).json();
  return status;
};

const postStatus = async (body: PostObj) => {
  await fetch(link, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
};

export { getStatus, postStatus };
