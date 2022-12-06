export default function authHeader() {
  const JWT = localStorage.getItem("JWT");

  if (JWT) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer   ${JWT}`,
    };
  } else {
    return { "Content-Type": "application/json" };
  }
}
