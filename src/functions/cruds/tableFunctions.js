// Fetchs
import { createFetch, showFetch, changeFetch, updateFetch, stateFetch, deleteFetch } from '../fetchs/tableFetch';
// Actions Creators
import { payload, loading, fetching } from "../../redux/actions/creators/tableCreator";
import { successSnackbar, infoSnackbar, warningSnackbar, dangerSnackbar } from "../../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function tableCreate(data) {
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
export async function tableShow() {
    loading(true);
    try {
        const response = await showFetch();
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

/*::::::::::::::::::::CHANGE::::::::::::::::::::*/
export async function tableChange(data) {
    fetching(true);
    try {
        const response = await changeFetch(data);
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

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export async function tableUpdate(data) {
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
export async function tableState(data) {
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
        return response.data;

    } catch (error) {
        fetching(false);
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export async function tableDelete(data) {
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
