// Fetchs
import { loginFetch, logoutFetch, createFetch, showFetch, updateFetch, stateFetch, deleteFetch } from './fetchs/superAdminFetch';
// Actions Creators
import { payload, fetching, loading } from "../redux/actions/creators/superAdminCreator";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export async function superAdminLogin(data) {
    loading(true);
    try {
        const response = await loginFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    payload(response.data.data);
                    localStorage.setItem('user', response.data.data.user);
                    localStorage.setItem('super_admin_id', response.data.data.id);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('rol', 'super_admin');
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

/*::::::::::::::::::::LOGOUT::::::::::::::::::::*/
export async function superAdminLogout(data) {
    loading(true);
    try {
        const response = await logoutFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    localStorage.setItem('user', '');
                    localStorage.setItem('super_admin_id', '');
                    localStorage.setItem('token', '');
                    localStorage.setItem('rol', '');
                    loading(false);
                    break;

                case false:
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

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function superAdminCreate(data) {
    fetching(true);
    try {
        const response = await createFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message.user ? response.data.message.user : response.data.message.password;
                        alert(messageError);
                    }
                    fetching(false);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        fetching(false);
        return error.message;
    };
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function superAdminShow(data) {
    loading(true);
    try {
        const response = await showFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    payload(response.data.data);
                    loading(false);
                    break;

                case false:
                    loading(false);
                    break;

                default:
                    break;
            }
        };
        return response.data.data;

    } catch (error) {
        loading(false);
        return error.message;
    };
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export async function superAdminUpdate(data) {
    fetching(true);
    try {
        const response = await updateFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    break;

                case false:
                    if (typeof response.data.message === 'string') {
                        let messageError = response.data.message;
                        alert(messageError);
                    } else {
                        let messageError = response.data.message.user ? response.data.message.user : response.data.message.password;
                        alert(messageError);
                    }
                    fetching(false);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        fetching(false);
        return error.message;
    };
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export async function superAdminState(data) {
    fetching(true);
    try {
        const response = await stateFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    break;

                case false:
                    fetching(false);
                    break;

                default:
                    break;
            }
        };
        return response.data.data;

    } catch (error) {
        fetching(false);
        return error.message;
    };
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export async function superAdminDelete(data) {
    loading(true);
    try {
        const response = await deleteFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    loading(false);
                    break;

                case false:
                    loading(false);
                    break;

                default:
                    break;
            }
        };
        return response.data.data;

    } catch (error) {
        loading(false);
        return error.message;
    };
};