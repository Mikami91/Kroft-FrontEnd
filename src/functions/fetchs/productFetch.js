// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    product_create,
    product_index,
    product_show,
    product_update,
    product_state,
    product_delete,
} from '../../API';


/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: product_show,
    });
};


