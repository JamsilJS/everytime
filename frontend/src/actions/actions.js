import request from "../axios";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTH = "AUTH";

export function register(dataToSubmit) {
  const data = request("post", "./register", dataToSubmit);
  return {
    type: REGISTER,
    payload: data,
  };
}

export function login(dataToSubmit) {
  const data = request("post", "./login", dataToSubmit);
  return {
    type: LOGIN,
    payload: data,
  };
}

export function logout() {
  const data = request("post", "./logout");
  return {
    type: LOGOUT,
    payload: data,
  };
}

export function auth() {
  const data = request("post", "./auth");
  return {
    type: AUTH,
    payload: data,
  };
}
