// Fetchs
import {
  createFetch,
  sendFetch,
  cancelFetch,
  showFetch,
} from "../fetchs/orderFetch";
// Actions Creators
import {
  payload,
  orders_detail,
  loading,
} from "../../redux/actions/creators/orderCreator";
import {
  successSnackbar,
  infoSnackbar,
  warningSnackbar,
  dangerSnackbar,
} from "../../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function orderCreate(data) {
  loading(true);
  try {
    const response = await createFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          loading(false);
          successSnackbar(response.data.message);
          break;

        case false:
          loading(false);
          dangerSnackbar(response.data.message);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::SEND::::::::::::::::::::*/
export async function orderSend(data) {
  loading(true);
  try {
    const response = await sendFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          loading(false);
          successSnackbar(response.data.message);
          break;

        case false:
          loading(false);
          dangerSnackbar(response.data.message);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::CANCEL::::::::::::::::::::*/
export async function orderCancel(data) {
  loading(true);
  try {
    const response = await cancelFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          loading(false);
          infoSnackbar(response.data.message);
          break;

        case false:
          loading(false);
          dangerSnackbar(response.data.message);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function orderShow() {
  loading(true);
  try {
    const response = await showFetch();
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          payload(response.data.data);
          orders_detail(response.data.data2);
          loading(false);
          break;

        case false:
          loading(false);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}
