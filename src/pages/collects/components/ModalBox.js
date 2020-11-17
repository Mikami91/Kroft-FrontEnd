// Dependencies
import React, { Fragment, useMemo } from "react";
import { useHistory } from "react-router-dom";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// Core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CardBox from "../../../components/Card/CardBox";
// Funtions
import { boxClosing } from "../../../functions/cruds/boxFunctions";

function ModalBox(props) {
  // Props
  const {
    // Local
    open,
    close,
    // Redux
    boxes,
    box_opening,
    box_fetching,
    box_loading,
  } = props;

  // Current Employee and Box
  const current_cashier_id = parseInt(localStorage.getItem("employee_id"));
  const current_box_id = parseInt(localStorage.getItem("box_id"));

  let history = useHistory();

  // Close Box function
  const handleBoxClose = async (e) => {
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
        history.push("/Kroft-FrontEnd");
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
          text: "Caja",
          margin: true,
          size: "medium",
          bold: true,
        }}
        content={
          box_opening !== undefined ? (
            <Fragment>
              <h2>Monto en Bs:</h2>
              <p>{box_opening.bs_income_amount}</p>
              <h2>Monto en $:</h2>
              <p>{box_opening.us_income_amount}</p>
              <h2>Monto en Tarjetas de Crédito:</h2>
              <p>{box_opening.cards_income_amount}</p>
              <h2>Monto en Pagaré:</h2>
              <p>{box_opening.will_pay_income_amount}</p>
            </Fragment>
          ) : null

          // <CardBox
          //   data={boxes}
          //   keyValue="id"
          //   filter={current_box_id}
          //   amount={{
          //     text: "Monto inicial",
          //     prefix: "Bs",
          //     field: "total_amount",
          //     color: "warning",
          //   }}
          //   change={{
          //     text: "Cambio",
          //     prefix: "Bs",
          //     field: "change_amount",
          //     color: "warning",
          //   }}
          //   income={{
          //     text: "Ingresos",
          //     prefix: "Bs",
          //     field: "bs_amount",
          //     color: "danger",
          //   }}
          // />
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
    boxes: boxes.payload,
    box_opening: boxes.box_opening.find(
      (index) => index.box_id === box_id && index.cashier_id === cashier_id
    ),
    box_fetching: boxes.fetching,
    box_loading: boxes.loading,
  };
};

export default connect(mapStateToProps, null)(ModalBox);
