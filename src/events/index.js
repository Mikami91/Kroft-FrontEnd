// Dependencies
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
// Actions Creators
import { payload as printCategoryPayload } from '../redux/actions/creators/printCategoryCreator';

// import { environmentList } from '../redux/actions/creators/environments';
// import { tableList } from '../redux/actions/creators/tables';
// import { categoryList } from '../redux/actions/creators/categories';
// import { subcategoryList } from '../redux/actions/creators/subcategories';
// import { productList, productMergeList } from '../redux/actions/creators/products';
// import { totalOrderList, orderList } from '../redux/actions/creators/orders';


export const handleEvents = () => {

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

    // Prints Categories
    window.Echo.channel('print_category').listen('PrintCategoryEvent', (e) => {
        printCategoryPayload(e.message);
    })

    // // Environments
    // window.Echo.channel('environments_chanel').listen('EnvironmentsEvent', (e) => {
    //     store.dispatch(environmentList(e.message));
    // })
    // // Tables
    // window.Echo.channel('tables_chanel').listen('TablesEvent', (e) => {
    //     store.dispatch(tableList(e.message));
    // })
    // // Categories
    // window.Echo.channel('categories_chanel').listen('CategoriesEvent', (e) => {
    //     store.dispatch(categoryList(e.message));
    // })
    // // SubCategories
    // window.Echo.channel('subcategories_chanel').listen('SubCategoriesEvent', (e) => {
    //     store.dispatch(subcategoryList(e.message));
    // })
    // // Products
    // window.Echo.channel('products_chanel').listen('ProductsEvent', (e) => {
    //     store.dispatch(productList(e.message));
    // })
    // // Products Merge
    // window.Echo.channel('products_merge_chanel').listen('ProductsMergeEvent', (e) => {
    //     store.dispatch(productMergeList(e.message));
    // })
    // // Total Orders
    // window.Echo.channel('total_orders_chanel').listen('TotalOrdersEvent', (e) => {
    //     store.dispatch(totalOrderList(e.message));
    // })
    // // Orders
    // window.Echo.channel('orders_chanel').listen('OrdersEvent', (e) => {
    //     store.dispatch(orderList(e.message));
    // })
}