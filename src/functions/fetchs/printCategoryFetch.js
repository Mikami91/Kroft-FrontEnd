// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    print_category_create,
    print_category_index,
    print_category_show,
    print_category_update,
    print_category_state,
    print_category_delete,
} from '../../API';


/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: print_category_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: print_category_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: print_category_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: print_category_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: print_category_delete,
        data: data,
    });
};


