// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    order_create,
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

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: order_show,
    });
};


