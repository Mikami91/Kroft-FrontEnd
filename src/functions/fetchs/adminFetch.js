// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
    admin_create,
    admin_index,
    admin_show,
    admin_update,
    admin_state,
    admin_delete,
    admin_login,
    admin_logout,
} from '../../API';


/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export const loginFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: admin_login,
        data: data,
    });
};

/*::::::::::::::::::::LOGOUT::::::::::::::::::::*/
export const logoutFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: admin_logout,
        data: data,
    });
};

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: admin_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: admin_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: admin_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: admin_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: admin_delete,
        data: data,
    });
};


