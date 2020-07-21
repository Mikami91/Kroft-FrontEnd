// Fetchs
import { showFetch } from './fetchs/tableFetch';
// Store
import store from '../redux/store';
// Actions Creators
import { tableList } from "../redux/actions/creators/tableCreator";

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function tableShow(data) {
    try {
        const response = await showFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    store.dispatch(tableList(response.data.data));
                    localStorage.setItem('user', response.data.data.user);
                    localStorage.setItem('token', response.data.token);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message;
                        alert(messageError);
                    }
                    break;
            
                default:
                    break;
            }
        };
        console.log(response);
        return response.data.data;

    } catch (error) {
        return error.message;
    };
};
