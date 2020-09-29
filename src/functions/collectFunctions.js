// Fetchs
import {
    createFetch,
    showFetch,
    globalReportFetch,
    employeeReportFetch,
    // cashierReportFetch,
    // waiterReportFetch,
    envReportFetch,
    productReportFetch,
    // tableReportFetch,
} from './fetchs/collectFetch';
// Actions Creators
import {
    payload,
    global,
    employee,
    // cashier,
    // waiter,
    env,
    product,
    // table,
    fetching,
    loading
} from "../redux/actions/creators/collectCreator";
import { successSnackbar, warningSnackbar, dangerSnackbar } from "../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function collectCreate(data) {
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
        warningSnackbar("Error de servidor.");
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
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::EMPLOYEE REPORT::::::::::::::::::::*/
export async function collectEmployeeReport(data) {
    fetching(true);
    try {
        const response = await employeeReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    employee(response.data.data);
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
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

// /*::::::::::::::::::::CASHIER REPORT::::::::::::::::::::*/
// export async function collectCashierReport(data) {
//     fetching(true);
//     try {
//         const response = await cashierReportFetch(data);
//         if (response.status === 200) {
//             switch (response.data.success) {
//                 case true:
//                     cashier(response.data.data);
//                     fetching(false);
//                     break;

//                 case false:
//                     fetching(false);
//                     break;

//                 default:
//                     break;
//             }
//         };
//         return response.data;

//     } catch (error) {
//         fetching(false);
//         warningSnackbar("Error de servidor.");
//         return error.message;
//     };
// };

// /*::::::::::::::::::::WAITER REPORT::::::::::::::::::::*/
// export async function collectWaiterReport(data) {
//     fetching(true);
//     try {
//         const response = await waiterReportFetch(data);
//         if (response.status === 200) {
//             switch (response.data.success) {
//                 case true:
//                     waiter(response.data.data);
//                     fetching(false);
//                     break;

//                 case false:
//                     fetching(false);
//                     break;

//                 default:
//                     break;
//             }
//         };
//         return response.data;

//     } catch (error) {
//         fetching(false);
//         warningSnackbar("Error de servidor.");
//         return error.message;
//     };
// };

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
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

/*::::::::::::::::::::PRODUCT REPORT::::::::::::::::::::*/
export async function collectProductReport(data) {
    fetching(true);
    try {
        const response = await productReportFetch(data);
        if (response.status === 200) {
            switch (response.data.success) {
                case true:
                    product(response.data.data);
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
        warningSnackbar("Error de servidor.");
        return error.message;
    };
};

// /*::::::::::::::::::::TABLE REPORT::::::::::::::::::::*/
// export async function collectTableReport(data) {
//     fetching(true);
//     try {
//         const response = await tableReportFetch(data);
//         if (response.status === 200) {
//             switch (response.data.success) {
//                 case true:
//                     table(response.data.data);
//                     fetching(false);
//                     break;

//                 case false:
//                     fetching(false);
//                     break;

//                 default:
//                     break;
//             }
//         };
//         return response.data;

//     } catch (error) {
//         fetching(false);
//         warningSnackbar("Error de servidor.");
//         return error.message;
//     };
// };
