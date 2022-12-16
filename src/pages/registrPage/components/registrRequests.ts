import REQUESTS from "../../../api/requests";

interface bodyType {
  name: string;
  email: string;
  password: string;
  age: number;
}

export function registr(values: bodyType, setMessage: Function) {
  const body: bodyType = {
    name: values.name,
    email: values.email,
    password: values.password,
    age: values.age,
  };

  function callback(data: any) {
    localStorage.setItem("JWT", data);
  }

  function errorCallback(err: any) {
    setMessage({
      text: err.message,
    });
  }

  REQUESTS.AUTHORIZATION.REGISTR(body, callback, errorCallback);
}
