// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    sub_category_create,
    sub_category_index,
    sub_category_show,
    sub_category_update,
    sub_category_state,
    sub_category_delete,
} from '../../API';


/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: sub_category_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: sub_category_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: sub_category_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: sub_category_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: sub_category_delete,
        data: data,
    });
};


