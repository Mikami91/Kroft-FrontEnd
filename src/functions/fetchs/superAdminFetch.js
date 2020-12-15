// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
  super_admin_create,
  super_admin_index,
  super_admin_show,
  super_admin_update,
  super_admin_state,
  super_admin_delete,
  super_admin_login,
  super_admin_logout,
  super_admin_logged,
} from "../../API";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export const loginFetch = (data) => {
  return customFetch({
    method: "POST",
    url: super_admin_login,
    data: data,
  });
};

/*::::::::::::::::::::LOGOUT::::::::::::::::::::*/
export const logoutFetch = (data) => {
  return customFetch({
    method: "POST",
    url: super_admin_logout,
    data: data,
  });
};

/*::::::::::::::::::::IS LOGGED::::::::::::::::::::*/
export const isLogged = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: super_admin_logged,
    data: data,
  });
};

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
  return customFetch({
    method: "POST",
    url: super_admin_create,
    data: data,
  });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
  return customFetch({
    method: "GET",
    token: true,
    url: super_admin_show,
  });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: super_admin_update,
    data: data,
  });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: super_admin_state,
    data: data,
  });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: super_admin_delete,
    data: data,
  });
};
