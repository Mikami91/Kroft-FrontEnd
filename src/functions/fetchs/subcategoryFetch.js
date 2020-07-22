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


/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: sub_category_show,
    });
};


