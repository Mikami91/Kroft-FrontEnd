// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    category_create,
    category_index,
    category_show,
    category_update,
    category_state,
    category_delete,
} from '../../API';


/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: category_show,
    });
};


