// Fetchs
import { createFetch, showFetch, updateFetch, stateFetch, deleteFetch } from './fetchs/paymentFetch';
// Actions Creators
import { payload, loading, fetching } from "../redux/actions/creators/paymentCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function paymentCreate(data) {
    fetching(true);
    try {
        const response = await createFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    break;

                case false:
                    alert(response.data.message);
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
export async function paymentShow(data) {
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
export async function paymentUpdate(data) {
    fetching(true);
    try {
        const response = await updateFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    fetching(false);
                    break;

                case false:
                    alert(response.data.message);
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
export async function paymentState(data) {
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
export async function paymentDelete(data) {
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
