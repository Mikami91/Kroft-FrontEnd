// Fetchs
import { loginFetch, loginPinFetch } from './fetchs/employeeFetch';
// Store
import store from '../redux/store';
// Actions Creators
import { employeeData } from "../redux/actions/creators/employeeCreator";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export async function employeeLogin(data) {
    try {
        const response = await loginFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    store.dispatch(employeeData(response.data.data));
                    localStorage.setItem('user', response.data.data.user);
                    localStorage.setItem('token', response.data.token);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message.user ? response.data.message.user : response.data.message.password;
                        alert(messageError);
                    }
                    break;
            
                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        return error.message;
    };
};

/*::::::::::::::::::::LOGIN PIN::::::::::::::::::::*/
export async function employeeLoginPin(data) {
    try {
        const response = await loginPinFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    localStorage.setItem('user', response.data.data.user);
                    localStorage.setItem('token', response.data.token);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message.user ? response.data.message.user : response.data.message.password;
                        alert(messageError);
                    }
                    break;
            
                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        return error.message;
    };
};