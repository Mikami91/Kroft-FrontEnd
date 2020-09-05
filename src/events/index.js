// Dependencies
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// Actions Creators

// import { payload as superAdminPayload } from '../redux/actions/creators/superAdminCreator';
import { payload as adminPayload } from '../redux/actions/creators/adminCreator';
import { payload as employeePayload } from '../redux/actions/creators/employeeCreator';
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
import { payload as collectPayload } from '../redux/actions/creators/collectCreator';
// import { payload as paymentPayload } from '../redux/actions/creators/paymentCreator';

export const handleEvents = () => {

    console.log("Ruuuun");

    //window.Pusher = require('pusher-js');

    // Configurations
    window.Echo = new Echo({
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

    // Events

    // // Super Admins
    // window.Echo.channel('super_admins').listen('SuperAdminEvent', (e) => {
    //     adminPayload(e.message);
    // })

    // Admins
    window.Echo.channel('admins').listen('AdminEvent', (e) => {
        adminPayload(e.message);
    })

    // Roles
    // window.Echo.channel('roles').listen('RolEvent', (e) => {
    //     rolPayload(e.message);
    // })

    // Employees
    window.Echo.channel('employees').listen('EmployeeEvent', (e) => {
        employeePayload(e.message);
    })

    // Salaries
    // window.Echo.channel('salaries').listen('SalaryEvent', (e) => {
    //     rolPayload(e.message);
    // })

    // Customers
    window.Echo.channel('customers').listen('CustomerEvent', (e) => {
        customerPayload(e.message);
    })

    // Environments
    window.Echo.channel('environments').listen('EnvironmentEvent', (e) => {
        environmentPayload(e.message);
    })

    // Tables
    window.Echo.channel('tables').listen('TableEvent', (e) => {
        tablePayload(e.message);
    })

    // PrintsCategories
    window.Echo.channel('print_categories').listen('PrintCategoryEvent', (e) => {
        printCategoryPayload(e.message);
    })

    // Categories
    window.Echo.channel('categories').listen('CategoryEvent', (e) => {
        categoryPayload(e.message);
    })

    // Subcategories
    window.Echo.channel('sub_categories').listen('SubCategoryEvent', (e) => {
        subcategoryPayload(e.message);
    })

    // Products
    window.Echo.channel('products').listen('ProductEvent', (e) => {
        productPayload(e.message);
    })

    // Suppliers
    window.Echo.channel('supplies').listen('SupplyEvent', (e) => {
        supplierPayload(e.message);
    })

    // Orders
    window.Echo.channel('orders').listen('OrderEvent', (e) => {
        orderPayload(e.message);
    })

    // Order Details
    window.Echo.channel('order_details').listen('OrderDetailEvent', (e) => {
        ordersDetailPayload(e.message);
    })

    // Collects
    window.Echo.channel('collects').listen('CollectEvent', (e) => {
        collectPayload(e.message);
    })

    // Payments
    // window.Echo.channel('payments').listen('PaymentEvent', (e) => {
    //     paymentPayload(e.message);
    // })
}