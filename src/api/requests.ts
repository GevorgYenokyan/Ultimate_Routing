import request from "./request";
import URLS from "./urls";

const REQUESTS = {
  AUTHORIZATION: {
    REGISTR: (body: {}, callback: Function, errorCallback: Function) => {
      request(URLS.register, "POST", body, callback, errorCallback);
    },

    LOGIN: (body: {}, callback: Function, errorCallback: Function) => {
      request(URLS.login, "POST", body, callback, errorCallback);
    },
  },
  USERS: {
    GET: (query: {}, callback: Function, errorCallback: Function) => {
      request(URLS.users, "GET", {}, callback, errorCallback, query);
    },
  },
};

export default REQUESTS;
