// Store
import store from '../../store';
// Action types
import {
  PRODUCT_LIST,
  OPEN_PRODUCTS,
  CLOSE_PRODUCTS,
  PRODUCT_ORDERS,
  MORE_QUANTITY,
  LESS_QUANTITY,
  REMOVE_PRODUCT,
  ADD_OBSERVATION,
  DELETE_OBSERVATION,
  DELETE_ORDERS,
  PRODUCT_FETCHING,
  PRODUCT_LOADING
} from '../actionsTypes';


export const product_list = (payload) => {
  return {
    type: PRODUCT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(product_list(payload));

export const open_products = (payload) => {
  return {
    type: OPEN_PRODUCTS,
    payload: payload
  };
}
export const open = (payload) => store.dispatch(open_products(payload));

export const close_products = () => {
  return {
    type: CLOSE_PRODUCTS,
  };
}
export const close = () => store.dispatch(close_products());

export const product_orders = (payload) => {
  return {
    type: PRODUCT_ORDERS,
    payload: payload
  };
}
export const orders = (payload) => store.dispatch(product_orders(payload));

export const more_quantity = (id) => {
  return {
    type: MORE_QUANTITY,
    id: id
  };
}
export const more = (id) => store.dispatch(more_quantity(id));

export const less_quantity = (id) => {
  return {
    type: LESS_QUANTITY,
    id: id
  };
}
export const less = (id) => store.dispatch(less_quantity(id));

export const remove_product = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id: id
  };
}
export const remove = (id) => store.dispatch(remove_product(id));

export const add_observation = (payload) => {
  return {
    type: ADD_OBSERVATION,
    payload: payload
  };
}
export const add_obs = (payload) => store.dispatch(add_observation(payload));

export const delete_observation = (payload) => {
  return {
    type: DELETE_OBSERVATION,
    payload: payload
  };
}
export const delete_obs = (payload) => store.dispatch(delete_observation(payload));

export const delete_orders = () => {
  return {
    type: DELETE_ORDERS,
  };
}
export const delete_all = () => store.dispatch(delete_orders());

export const product_fetching = (value) => {
  return {
    type: PRODUCT_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(product_fetching(value));

export const product_loading = (value) => {
  return {
    type: PRODUCT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(product_loading(value));