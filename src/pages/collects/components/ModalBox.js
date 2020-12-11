// Dependencies
import React, { Fragment, useMemo } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// Core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CardOpenBox from "../../../components/Card/CardOpenBox";
// Funtions
import { boxClosing } from "../../../functions/cruds/boxFunctions";

function ModalBox(props) {
  const {
    // Props
    open,
    close,
    handleLogout,
    // Redux
    box_opening,
    box_fetching,
    box_loading,
  } = props;
  // Configs
  moment.locale("es");
  moment().format("l");

  // Current Employee and Box
  const current_cashier_id = parseInt(localStorage.getItem("employee_id"));
  const current_box_id = parseInt(localStorage.getItem("box_id"));

  let history = useHistory();

  // Close Box function
  const handleBoxClose = async (e) => {
    close();
    await handleLogout(e);
    e.preventDefault();
    let response = await boxClosing({
      box_id: current_box_id,
      cashier_id: current_cashier_id,
    });
    if (typeof response !== "undefined") {
      if (response.success === true) {
        close();
        localStorage.setItem("box_id", 0);
        localStorage.setItem("employee_id", null);
        localStorage.setItem("token", null);
        // Redirect to login page
        history.push("/");
      }
    }
  };

  // Using useMemo hook
  return useMemo(() => {
    return (
      <CustomModal
        open={open}
        close={close}
        closeIcon={true}
        title={{
          text: box_opening !== undefined ? `${box_opening.name}: ` : "",
          margin: true,
          size: "medium",
          bold: true,
        }}
        subtitle={{
          text:
            box_opening !== undefined
              ? `Apertura ${moment(box_opening.open_date).format(
                  "D-MM-YYYY, h:mm a"
                )}`
              : "",
          margin: true,
          size: "default",
          bold: false,
        }}
        content={
          <CardOpenBox
            data={box_opening}
            keyValue="id"
            filter={current_box_id}
            amount={{
              text: "Monto inicial",
              prefix: "Bs",
              field: "total_amount",
              color: "warning",
            }}
            change={{
              text: "Cambio",
              prefix: "Bs",
              field: "change_amount",
              color: "warning",
            }}
            income={{
              text: "Ingresos",
              prefix: "Bs",
              field: "bs_amount",
              color: "danger",
            }}
          />
        }
        rightButtons={[
          {
            type: "button",
            text: "Cierre de caja",
            color: "primary",
            icon: DoneRoundedIcon,
            edge: "start",
            size: "large",
            variant: "contained",
            disabled: current_box_id !== null || "" ? false : true,
            onClick: handleBoxClose,
          },
        ]}
        renderRefresh={[open, box_opening !== undefined ? box_opening : null]}
        loading={box_fetching || box_loading}
        scroll="paper"
        maxWidth="xs"
        fullWidth
      />
    );
  }, [open]);
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { boxes } = state;
  const cashier_id = parseInt(localStorage.getItem("employee_id"));
  const box_id = parseInt(localStorage.getItem("box_id"));
  return {
    box_opening: boxes.box_opening.find(
      (index) => index.box_id === box_id && index.cashier_id === cashier_id
    ),
    box_fetching: boxes.fetching,
    box_loading: boxes.loading,
  };
};

export default connect(mapStateToProps, null)(ModalBox);
