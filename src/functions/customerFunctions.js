// Fetchs
import { createFetch, showFetch, updateFetch, stateFetch, deleteFetch } from './fetchs/customerFetch';
// Actions Creators
import { payload, fetching, loading } from "../redux/actions/creators/customerCreator";
import { successSnackbar, infoSnackbar, warningSnackbar, dangerSnackbar } from "../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function customerCreate(data) {
    fetching(true);
    try {
        const response = await createFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    successSnackbar(response.data.message);
                    break;

                case false:
                    fetching(false);
                    dangerSnackbar(response.data.message);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        fetching(false);
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function customerShow(data) {
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
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export async function customerUpdate(data) {
    fetching(true);
    try {
        const response = await updateFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    infoSnackbar(response.data.message);
                    break;

                case false:
                    fetching(false);
                    dangerSnackbar(response.data.message);
                    break;

                default:
                    break;
            }
        };
        return response.data;

    } catch (error) {
        fetching(false);
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export async function customerState(data) {
    fetching(true);
    try {
        const response = await stateFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    infoSnackbar(response.data.message);
                    break;

                case false:
                    fetching(false);
                    dangerSnackbar(response.data.message);
                    break;

                default:
                    break;
            }
        };
        return response.data.data;

    } catch (error) {
        fetching(false);
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export async function customerDelete(data) {
    loading(true);
    try {
        const response = await deleteFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    loading(false);
                    successSnackbar(response.data.message);
                    break;

                case false:
                    loading(false);
                    dangerSnackbar(response.data.message);
                    break;

                default:
                    break;
            }
        };
        return response.data.data;

    } catch (error) {
        loading(false);
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};