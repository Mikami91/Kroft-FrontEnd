// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    table_create,
    table_index,
    table_show,
    table_change,
    table_update,
    table_state,
    table_delete,
} from '../../API';


/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: table_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: table_show,
    });
};

/*::::::::::::::::::::CHANGE::::::::::::::::::::*/
export const changeFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: table_change,
        data: data,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: table_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: table_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: table_delete,
        data: data,
    });
};


