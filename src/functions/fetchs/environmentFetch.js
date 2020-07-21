// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    environment_create,
    environment_index,
    environment_show,
    environment_update,
    environment_state,
    environment_delete,
} from '../../API';


/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: environment_show,
        data: data,
    });
};


