// Fetchs
import { createFetch, showFetch, updateFetch, stateFetch, deleteFetch } from './fetchs/rolFetch';
// Actions Creators
import { payload, loading, fetching } from "../redux/actions/creators/rolCreator";
import { successSnackbar, infoSnackbar, warningSnackbar, dangerSnackbar } from "../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function rolCreate(data) {
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
export async function rolShow(data) {
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
export async function rolUpdate(data) {
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
export async function rolState(data) {
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
export async function rolDelete(data) {
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
