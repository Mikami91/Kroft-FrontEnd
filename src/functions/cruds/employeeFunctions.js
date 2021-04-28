// Fetchs
import {
  loginFetch,
  loginPinFetch,
  logoutFetch,
  isLogged,
  createFetch,
  showFetch,
  updateFetch,
  stateFetch,
  deleteFetch,
} from "../fetchs/employeeFetch";
// Actions Creators
import {
  payload,
  fetching,
  loading,
} from "../../redux/actions/creators/employeeCreator";
import {
  successSnackbar,
  infoSnackbar,
  warningSnackbar,
  dangerSnackbar,
} from "../../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export async function employeeLogin(data) {
  loading(true);
  try {
    const response = await loginFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          payload(response.data.data);
          localStorage.setItem("user", response.data.data.user);
          localStorage.setItem("employee_id", response.data.data.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("head_area", response.data.data.head_area);
          localStorage.setItem(
            "rol",
            response.data.data.rol_id === 1 ? "waiter" : "cashier"
          );
          localStorage.setItem("login_type", "normal");
          loading(false);
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

/*::::::::::::::::::::LOGIN PIN::::::::::::::::::::*/
export async function employeeLoginPin(data) {
  loading(true);
  try {
    const response = await loginPinFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          localStorage.setItem("user", response.data.data.user);
          localStorage.setItem("employee_id", response.data.data.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("head_area", response.data.data.head_area);
          localStorage.setItem(
            "rol",
            response.data.data.rol_id === 1 ? "waiter" : "cashier"
          );
          localStorage.setItem("login_type", "pin");
          loading(false);
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

/*::::::::::::::::::::LOGOUT::::::::::::::::::::*/
export async function employeeLogout(data) {
  loading(true);
  try {
    const response = await logoutFetch({
      ...data,
      employee_id: localStorage.getItem("employee_id"),
      login_type: localStorage.getItem("login_type"),
    });
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          loading(false);
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
  }
}

/*::::::::::::::::::::IS LOGGED::::::::::::::::::::*/
export async function isLoggedEmployee(data) {
  loading(true);
  try {
    const response = await isLogged({
      ...data,
      login_type: localStorage.getItem("login_type"),
    });
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          loading(false);
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

/*::::::::::::::::::::CREATE::::::::::::::::::::*/
export async function employeeCreate(data) {
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
    }
    return response.data;
  } catch (error) {
    fetching(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::SHOW::::::::::::::::::::*/
export async function employeeShow() {
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
    }
    return response.data.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::UPDATE::::::::::::::::::::*/
export async function employeeUpdate(data) {
  fetching(true);
  try {
    const response = await updateFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          fetching(false);
          infoSnackbar(response.data.message);
          break;

        case false:
          fetching(false);
          dangerSnackbar(response.data.message);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    fetching(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::STATE::::::::::::::::::::*/
export async function employeeState(data) {
  fetching(true);
  try {
    const response = await stateFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          fetching(false);
          infoSnackbar(response.data.message);
          break;

        case false:
          fetching(false);
          dangerSnackbar(response.data.message);
          break;

        default:
          break;
      }
    }
    return response.data;
  } catch (error) {
    fetching(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}

/*::::::::::::::::::::DELETE::::::::::::::::::::*/
export async function employeeDelete(data) {
  loading(true);
  try {
    const response = await deleteFetch(data);
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
    return response.data.data;
  } catch (error) {
    loading(false);
    warningSnackbar("Error de servidor.");
    return error.message;
  }
}