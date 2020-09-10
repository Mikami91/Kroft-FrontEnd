// Dependencies
import axios from 'axios';
// API
import { API } from '../../API';

export const customFetch = (props) => {
    const { method, token, url, type, data, timeout } = props;
    return axios({
        method: typeof method !== 'undefined' ? method : 'POST',
        url: API + url,
        headers: {
            'Content-Type': typeof type !== 'undefined' ? type : 'application/json',
            'Authorization': token === true ? 'Bearer ' + localStorage.getItem('token') : null,
            'Token': token === true ? localStorage.getItem('token') : null,
        },
        timeout: typeof timeout !== 'undefined' ? timeout : 15000,
        data: typeof data !== 'undefined' ? data : null
    });
};