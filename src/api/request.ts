import authHeader from "./authHeader";

interface ParamasType {
  method: string;
  headers: {};
  redirect: any;
  body?: any;
}

export default function request(
  url: string,
  method: string,
  body: any,
  colback: Function,
  errorColback: Function,
  id = ""
) {
  let requestParamas: ParamasType = {
    method: method,
    headers: authHeader(),
    redirect: "follow",
  };
  if (method !== "GET") {
    requestParamas.body = JSON.stringify(body);
  }
  fetch(`${url}${id}`, requestParamas)
    .then((data) => data.json())
    .then((response) => colback(response))
    .catch((error) => errorColback(error));
}
