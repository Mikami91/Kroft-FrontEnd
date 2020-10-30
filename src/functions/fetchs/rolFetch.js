// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
    rol_create,
    rol_index,
    rol_show,
    rol_update,
    rol_state,
    rol_delete,
} from '../../API';


/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: rol_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: rol_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: rol_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: rol_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: rol_delete,
        data: data,
    });
};


