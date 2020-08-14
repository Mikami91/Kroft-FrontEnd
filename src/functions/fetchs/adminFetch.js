// Custom fetch
import { customFetch } from "./CustomFetch";
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

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: admin_show,
    });
};


