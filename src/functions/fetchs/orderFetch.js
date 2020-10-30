// Custom fetch
import { customFetch } from "../CustomFetch";
// APIs
import {
    order_create,
    order_send,
    order_cancel,
    order_index,
    order_show,
    order_update,
    order_state,
    order_delete,
} from '../../API';

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: order_create,
        data: data
    });
};

/*::::::::::::::::::::SEND::::::::::::::::::::*/
export const sendFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: order_send,
        data: data
    });
};

/*::::::::::::::::::::CANCEL::::::::::::::::::::*/
export const cancelFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: order_cancel,
        data: data
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: order_show,
    });
};


