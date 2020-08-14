// Fetchs
import { loginFetch } from './fetchs/adminFetch';
// Actions Creators
import { payload, loading } from "../redux/actions/creators/adminCreator";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export async function adminLogin(data) {
    loading(true);
    try {
        const response = await loginFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    payload(response.data.data);
                    localStorage.setItem('user', response.data.data.user);
                    localStorage.setItem('admin_id', response.data.data.id);
                    localStorage.setItem('token', response.data.token);
                    loading(false);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message.user ? response.data.message.user : response.data.message.password;
                        alert(messageError);
                    }
                    loading(false);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        loading(false);
        return error.message;
    };
};