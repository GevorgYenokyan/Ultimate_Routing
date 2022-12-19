import request from "./request";
import URLS from "./urls";

const REQUESTS = {
  AUTHORIZATION: {
    REGISTR: (
      body: {},
      callback: <Type>(response: Type) => void,
      errorCallback: <Type>(error: Type) => void
    ) => {
      request(URLS.register, "POST", body, callback, errorCallback, {});
    },

    LOGIN: (
      body: {},

      callback: <Type>(response: Type) => void,
      errorCallback: <Type>(error: Type) => void
    ) => {
      request(URLS.login, "POST", body, callback, errorCallback, {});
    },
  },
  USERS: {
    GET: (
      query: {},
      callback: <Type>(response: Type) => void,
      errorCallback: <Type>(error: Type) => void
    ) => {
      request(URLS.users, "GET", "", callback, errorCallback, query);
    },
  },
};

export default REQUESTS;
