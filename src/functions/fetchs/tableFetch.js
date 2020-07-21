// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    table_create,
    table_index,
    table_show,
    table_update,
    table_state,
    table_delete,
} from '../../API';


/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = (data) => {
    return customFetch({
        method: 'GET',
        token: true,
        url: table_show,
        data: data,
    });
};


