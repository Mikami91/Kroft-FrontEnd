// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
  box_create,
  box_index,
  box_show,
  box_update,
  box_opening,
  box_closing,
  box_state,
  box_delete,
} from "../../API";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_create,
    data: data,
  });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
  return customFetch({
    method: "GET",
    token: true,
    url: box_show,
  });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_update,
    data: data,
  });
};

/*::::::::::::::::::::OPENING::::::::::::::::::::*/
export const openingFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_opening,
    data: data,
  });
};

/*::::::::::::::::::::CLOSING::::::::::::::::::::*/
export const closingFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_closing,
    data: data,
  });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_state,
    data: data,
  });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
  return customFetch({
    method: "POST",
    token: true,
    url: box_delete,
    data: data,
  });
};
