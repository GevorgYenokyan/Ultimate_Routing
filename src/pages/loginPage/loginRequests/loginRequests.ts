import REQUESTS from "../../../api/requests";

interface bodyType {
  email: string;
  password: string;
}

export function login(values: bodyType, setMessage: Function) {
  const body: bodyType = {
    email: values.email,
    password: values.password,
  };

  function callback(data: any) {
    localStorage.setItem("JWT", data.message);
    console.log(data);
  }

  function errorCallback(err: any) {
    console.log(14);
    setMessage({
      text: err.message,
    });
  }

  REQUESTS.AUTHORIZATION.LOGIN(body, callback, errorCallback);
}
