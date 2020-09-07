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
import {
    payload,
    global,
    cashier,
    waiter,
    env,
    table,
    fetching,
    loading
} from "../redux/actions/creators/collectCreator";

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


/*::::::::::::::::::::CASHIER REPORT::::::::::::::::::::*/
export async function collectCashierReport(data) {
    fetching(true);
    try {
        const response = await cashierReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    cashier(response.data.data);
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

/*::::::::::::::::::::WAITER REPORT::::::::::::::::::::*/
export async function collectWaiterReport(data) {
    fetching(true);
    try {
        const response = await waiterReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    waiter(response.data.data);
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

/*::::::::::::::::::::ENV REPORT::::::::::::::::::::*/
export async function collectEnvReport(data) {
    fetching(true);
    try {
        const response = await envReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    env(response.data.data);
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

/*::::::::::::::::::::TABLE REPORT::::::::::::::::::::*/
export async function collectTableReport(data) {
    loading(true);
    try {
        const response = await tableReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    table(response.data.data);
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
