function generate_host() {
  let hostname = window.location.host;
  let api_host = "";

  if (hostname.includes("localhost")) {
    api_host = "";
  } else if (hostname.includes("host")) {
    api_host = "";
  } else {
    api_host = "https://" + generate_api_url(hostname);
  }

  return api_host;
}

function generate_api_url(host: any) {
  if (host.split(".").length === 2) {
    return "api." + host;
  } else {
    host = host.split(".");

    host[0] = "api";

    return host.join(".");
  }
}

interface CONSTANTSTYPE {
  JWT: string;
  APP_NAME: string;
  API_HOST: string;
}

const HOST = generate_host();
const CONSTANTS: CONSTANTSTYPE = {
  JWT: "JWT",
  APP_NAME: "ULTIMATE-ROUTING", //process.env.REACT_APP_APPLICATION_NAME,
  API_HOST: HOST, //process.env.REACT_APP_API_URL,
};

export default CONSTANTS;
