import authHeader from "./authHeader";
import { createSearchParams } from "react-router-dom";

interface ParamasType {
  method: string;
  headers: {};
  redirect: any;
  body?: any;
}

export default function request(
  url: string,
  method: string,
  body: {},
  colback: <Type>(response: Type) => void,
  errorColback: <Type>(err: Type) => void,
  query?: {}
) {
  let requestParamas: ParamasType = {
    method: method,
    headers: authHeader(),
    redirect: "follow",
  };
  if (method !== "GET") {
    requestParamas.body = JSON.stringify(body);
  }
  fetch(`${url}?${createSearchParams(query)}`, requestParamas)
    .then((data) => data.json())
    .then((response) => colback(response))
    .catch((error) => errorColback(error));
}

//alternative function for requests using axios

// import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// const request = (
//   method: string,
//   url: string,
//   body: AxiosRequestConfig,
//   callback: <T>(message:T) => void,
//   errorCallback: (message: string) => void,
//   notTimeout: boolean
// ): void => {
//   let myAxios: AxiosInstance = axios.create();

//   myAxios.defaults.headers.common["Authorization"] =
//     localStorage.getItem("TOKEN");

//   function isAxiosMethod(method: string): method is keyof AxiosInstance {
//     return method in axios;
//   }

//   if (isAxiosMethod(method)) {
//     myAxios[method](url, method === "delete" ? { data: body } : body)
//       .then((response) => {
//         if (response.data.error) {
//           if (response.data.message === "Forbiden") {
//             window.location.href = "#";
//           }

//           if (errorCallback) {
//             errorCallback(response.data.message);
//           }
//         } else {
//           callback(response.data.message);
//         }
//       })
//       .catch((error) => {
//         if (errorCallback) {
//           errorCallback(error.response.data.message);
//         }
//       });
//   }
// };

// export default request;
