// Dependencies
import { useMemo } from "react";
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// Actions Creators

// import { payload as superAdminPayload } from '../redux/actions/creators/superAdminCreator';
import { payload as adminPayload } from '../redux/actions/creators/adminCreator';
import { payload as employeePayload } from '../redux/actions/creators/employeeCreator';
import { payload as rolPayload } from '../redux/actions/creators/rolCreator';
// import { payload as salaryPayload } from '../redux/actions/creators/salaryCreator';
import { payload as customerPayload } from '../redux/actions/creators/customerCreator';
import { payload as environmentPayload } from '../redux/actions/creators/environmentCreator';
import { payload as tablePayload } from '../redux/actions/creators/tableCreator';
import { payload as printCategoryPayload } from '../redux/actions/creators/printCategoryCreator';
import { payload as categoryPayload } from '../redux/actions/creators/categoryCreator';
import { payload as subcategoryPayload } from '../redux/actions/creators/subcategoryCreator';
import { payload as productPayload } from '../redux/actions/creators/productCreator';
import { payload as supplierPayload } from '../redux/actions/creators/supplierCreator';
// import { payload as ingredientPayload } from '../redux/actions/creators/ingredientCreator';
import { payload as orderPayload, orders_detail as ordersDetailPayload } from '../redux/actions/creators/orderCreator';
import { payload as paymentPayload } from '../redux/actions/creators/paymentCreator';
import { payload as collectPayload } from '../redux/actions/creators/collectCreator';

//window.Pusher = require('pusher-js');

// CONFIGURATIONS

export const websocketConnection = new Echo({
    broadcaster: 'pusher',
    key: '3351a028ec8f3033b9c3',
    // wsHost: 'http://kroftserver.test',
    wsHost: window.location.hostname,
    wsPort: 6001,
    cluster: 'mt1',
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
        },
    },
    disableStats: true,
    encrypted: false
});


// EVENTS

// // Super Admins
// export const super_admis_WS = () => useMemo(() => {
//     websocketConnection.channel('super_admis').listen('SuperAdminEvent', (e) => {
//         superAdminPayload(e.message);
//     })
// }, []);

// Admins
export const admins_WS = () => useMemo(() => {
    websocketConnection.channel('admins').listen('AdminEvent', (e) => {
        adminPayload(e.message);
    })
}, []);

//  Roles
export const roles_WS = () => useMemo(() => {
    websocketConnection.channel('roles').listen('RolEvent', (e) => {
        rolPayload(e.message);
    })
}, []);

// Employees
export const employees_WS = () => useMemo(() => {
    websocketConnection.channel('employees').listen('EmployeeEvent', (e) => {
        employeePayload(e.message);
    })
}, []);

// // Salaries
// export const salaries_WS = () => useMemo(() => {
//     websocketConnection.channel('salaries').listen('SalaryEvent', (e) => {
//         salaryPayload(e.message);
//     })
// }, []);

// Customers
export const customers_WS = () => useMemo(() => {
    websocketConnection.channel('customers').listen('CustomerEvent', (e) => {
        customerPayload(e.message);
    })
}, []);

// Environments
export const environments_WS = () => useMemo(() => {
    websocketConnection.channel('environments').listen('EnvironmentEvent', (e) => {
        environmentPayload(e.message);
    })
}, []);

// Tables
export const tables_WS = () => useMemo(() => {
    websocketConnection.channel('tables').listen('TableEvent', (e) => {
        tablePayload(e.message);
    })
}, []);

// PrintsCategories
export const print_categories_WS = () => useMemo(() => {
    websocketConnection.channel('print_categories').listen('PrintCategoryEvent', (e) => {
        printCategoryPayload(e.message);
    })
}, []);

// Categories
export const categories_WS = () => useMemo(() => {
    websocketConnection.channel('categories').listen('CategoryEvent', (e) => {
        categoryPayload(e.message);
    })
}, []);

// Subcategories
export const sub_categories_WS = () => useMemo(() => {
    websocketConnection.channel('sub_categories').listen('SubCategoryEvent', (e) => {
        subcategoryPayload(e.message);
    })
}, []);

// Products
export const products_WS = () => useMemo(() => {
    websocketConnection.channel('products').listen('ProductEvent', (e) => {
        productPayload(e.message);
    })
}, []);

// Suppliers
export const supplies_WS = () => useMemo(() => {
    websocketConnection.channel('supplies').listen('SupplyEvent', (e) => {
        supplierPayload(e.message);
    })
}, []);

// Orders
export const orders_WS = () => useMemo(() => {
    websocketConnection.channel('orders').listen('OrderEvent', (e) => {
        orderPayload(e.message);
    })
}, []);

// Order Details
export const order_details_WS = () => useMemo(() => {
    websocketConnection.channel('order_details').listen('OrderDetailEvent', (e) => {
        ordersDetailPayload(e.message);
    })
}, []);

// Payments
export const payments_WS = () => useMemo(() => {
    websocketConnection.channel('payments').listen('PaymentEvent', (e) => {
        paymentPayload(e.message);
    })
}, []);

// Collects
export const collects_WS = () => useMemo(() => {
    websocketConnection.channel('collects').listen('CollectEvent', (e) => {
        collectPayload(e.message);
    })
}, []);