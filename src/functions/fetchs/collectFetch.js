// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    collect_create,
    collect_send,
    collect_cancel,
    collect_index,
    collect_show,
    collect_update,
    collect_state,
    collect_delete,
} from '../../API';

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_create,
        data: data
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: collect_show,
    });
};


