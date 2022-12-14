import CONSTANTS from "../config";

const URLS = {
  register: `${CONSTANTS.API_HOST}/register`,
  login: `${CONSTANTS.API_HOST}/admin/login`,
  logoute: `${CONSTANTS.API_HOST}user/logout`,
  users: `${CONSTANTS.API_HOST}/admin/devices`,
  upload_img: `${CONSTANTS.API_HOST}me/avatar`,
  add_todo: `${CONSTANTS.API_HOST}task`,
};

export default URLS;
