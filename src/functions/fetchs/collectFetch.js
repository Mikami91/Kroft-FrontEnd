// Custom fetch
import { customFetch } from "./CustomFetch";
// APIs
import {
    collect_create,
    collect_send,
    collect_cancel,
    collect_index,
    collect_show,

    collect_global_report,
    collect_cashier_report,
    collect_waiter_report,
    collect_env_report,
    collect_table_report,

    collect_update,
    collect_state,
    collect_delete,
} from '../../API';

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export const createFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_create,
        data: data
    });
};

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export const showFetch = () => {
    return customFetch({
        method: 'GET',
        token: true,
        url: collect_show,
    });
};

/*::::::::::::::::::::GLOBAL REPORT::::::::::::::::::::*/
export const globalReportFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_global_report,
        data: data
    });
};

/*::::::::::::::::::::CASHIER REPORT::::::::::::::::::::*/
export const cashierReportFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_cashier_report,
        data: data
    });
};

/*::::::::::::::::::::WAITER REPORT::::::::::::::::::::*/
export const waiterReportFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_waiter_report,
        data: data
    });
};

/*::::::::::::::::::::ENV REPORT::::::::::::::::::::*/
export const envReportFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_env_report,
        data: data
    });
};

/*::::::::::::::::::::TABLE REPORT::::::::::::::::::::*/
export const tableReportFetch = (data) => {
    return customFetch({
        method: 'POST',
        token: true,
        url: collect_table_report,
        data: data
    });
};


