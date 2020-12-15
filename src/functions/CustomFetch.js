// Dependencies
import axios from "axios";
// API
import { API } from "../API";

export const customFetch = (props) => {
  const { method, token, url, type, data, timeout } = props;
  return axios({
    method: typeof method !== "undefined" ? method : "POST",
    url: API + url,
    headers: {
      // 'Access-Control-Allow-Origin': 'http://kroft-backend.test/',
      // 'Access-Control-Allow-Origin': 'http://c1870854.ferozo.com/kroft/',
      "Content-Type": typeof type !== "undefined" ? type : "application/json",
      Authorization:
        token === true ? "Bearer " + localStorage.getItem("token") : null,
      Token: token === true ? localStorage.getItem("token") : null,
      "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
    },
    timeout: typeof timeout !== "undefined" ? timeout : 30000,
    data: typeof data !== "undefined" ? data : null,
  });
};
