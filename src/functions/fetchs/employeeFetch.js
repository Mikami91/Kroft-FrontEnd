// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
    employee_create,
    employee_index,
    employee_show,
    employee_update,
    employee_state,
    employee_delete,
    employee_login,
    employee_login_pin,
    employee_logout,
} from '../../API';


/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export const loginFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: employee_login,
        data: data,
    });
};

/*::::::::::::::::::::LOGIN PIN::::::::::::::::::::*/
export const loginPinFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: employee_login_pin,
        data: data,
    });
};

/*::::::::::::::::::::LOGOUT::::::::::::::::::::*/
export const logoutFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: employee_logout,
        data: data,
    });
};

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: employee_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: employee_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: employee_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: employee_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: employee_delete,
        data: data,
    });
};


