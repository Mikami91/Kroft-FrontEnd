// Custom fetch
import { customFetch } from "./CustomFetch";
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

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        url: employee_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: employee_show,
    });
};


