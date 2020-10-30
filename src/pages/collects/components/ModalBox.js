// Dependencies
import React, { Component } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// Core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CardBox from "../../../components/Card/CardBox";

function ModalBox(props) {
  // Props
  const {
    // Local
    open,
    close,
    // Redux
    boxes,
    box_fetching,
    box_loading,
  } = props;

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
        <CardBox
          data={boxes}
          keyValue="id"
          filter={parseInt(localStorage.getItem("box_id"))}
          amount={{
            text: "Monto inicial",
            prefix: "Bs",
            field: "box_amount",
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
            field: "income_amount",
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
          disabled:
            localStorage.getItem("box_id") !== null || "" ? false : true,
          // onClick: handleSelectBox,
        },
      ]}
      renderRefresh={[open]}
      loading={box_fetching || box_loading}
      scroll="paper"
      maxWidth="xs"
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { boxes } = state;
  return {
    boxes: boxes.payload,
    box_fetching: boxes.fetching,
    box_loading: boxes.loading,
  };
};

export default connect(mapStateToProps, null)(ModalBox);
