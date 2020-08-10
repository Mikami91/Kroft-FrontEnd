// Fetchs
import { createFetch, showFetch } from './fetchs/collectFetch';
// Actions Creators
import { payload, loading } from "../redux/actions/creators/collectCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function collectCreate(data) {
    loading(true);
    try {
        const response = await createFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    // payload(response.data.data);
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

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function collectShow() {
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
        return response.data;

    } catch (error) {
        loading(false);
        return error.message;
    };
};
