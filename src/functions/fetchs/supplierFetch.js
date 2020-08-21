// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    supply_create,
    supply_index,
    supply_show,
    supply_update,
    supply_state,
    supply_delete,
} from '../../API';


/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: supply_create,
        data: data,
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: supply_show,
    });
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export const updateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: supply_update,
        data: data,
    });
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export const stateFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: supply_state,
        data: data,
    });
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export const deleteFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: supply_delete,
        data: data,
    });
};


