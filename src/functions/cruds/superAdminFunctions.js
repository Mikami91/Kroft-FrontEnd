// Fetchs
import {
  loginFetch,
  logoutFetch,
  isLogged,
  createFetch,
  showFetch,
  updateFetch,
  stateFetch,
  deleteFetch,
} from "../fetchs/superAdminFetch";
// Actions Creators
import {
  payload,
  fetching,
  loading,
} from "../../redux/actions/creators/superAdminCreator";
import {
  successSnackbar,
  infoSnackbar,
  warningSnackbar,
  dangerSnackbar,
} from "../../redux/actions/creators/snackbarCreator";

/*::::::::::::::::::::LOGIN::::::::::::::::::::*/
export async function superAdminLogin(data) {
  loading(true);
  try {
    const response = await loginFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          payload(response.data.data);
          localStorage.setItem("user", response.data.data.user);
          localStorage.setItem("admin_id", response.data.data.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("rol", "super_admin");
          localStorage.setItem("first_name", response.data.data.first_name);
          localStorage.setItem("last_name", response.data.data.last_name);
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
export async function superAdminLogout(data) {
  loading(true);
  try {
    const response = await logoutFetch(data);
    if (response.status === 200) {
      switch (response.data.success) {
        case true:
          localStorage.setItem("user", "");
          localStorage.setItem("admin_id", "");
          localStorage.setItem("token", "");
          localStorage.setItem("rol", "");
          localStorage.setItem("first_name", "");
          localStorage.setItem("last_name", "");
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

/*::::::::::::::::::::IS LOGGED::::::::::::::::::::*/
export async function isLoggedSuperAdmin(data) {
  loading(true);
  try {
    const response = await isLogged(data);
    console.log(response);
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
export async function superAdminCreate(data) {
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
export async function superAdminShow() {
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
export async function superAdminUpdate(data) {
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
export async function superAdminState(data) {
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
export async function superAdminDelete(data) {
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
