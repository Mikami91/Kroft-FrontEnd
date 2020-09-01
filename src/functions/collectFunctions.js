// Fetchs
import {
    createFetch,
    showFetch,
    globalReportFetch,
    cashierReportFetch,
    waiterReportFetch,
    envReportFetch,
    tableReportFetch,
} from './fetchs/collectFetch';
// Actions Creators
import { payload, global, fetching, loading } from "../redux/actions/creators/collectCreator";

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

/*::::::::::::::::::::GLOBAL REPORT::::::::::::::::::::*/
export async function collectGlobalReport(data) {
    fetching(true);
    try {
        const response = await globalReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    global(response.data.data);
                    fetching(false);
                    break;

                case false:
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
