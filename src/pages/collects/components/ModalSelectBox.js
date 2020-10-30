// Dependencies
import React from "react";
import { connect } from "react-redux";
// core components
import CustomCheckList from "../../../components/List/CustomCheckList";
import CustomModal from "../../../components/Modal/CustomModal.js";
// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// Functions
import { boxState as boxStateFunc } from "../../../functions/cruds/boxFunctions";

function ModalSelectBox(props) {
  // Props
  const {
    // Local
    state,
    set,
    close,
    logout,
    // Redux
    boxes,
    box_fetching,
    box_loading,
  } = props;

  const handleChangeBox = (value) => set(value);

  // Select Box function
  const handleSelectBox = (e) => {
    e.preventDefault();
    boxStateFunc(state).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          close();
          localStorage.setItem("box_id", state.id);
        }
      }
    });
  };

  return (
    <CustomModal
      open={state.open}
      close={handleChangeBox}
      closeIcon={false}
      title={{
        text: "Apertura de Caja",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={
        <CustomCheckList
          list={boxes}
          keyValue="id"
          value="name"
          checked={state.id}
          onChange={handleChangeBox}
          fontSize="medium"
          fontColor="warning"
          fontBold={true}
        />
      }
      leftButtons={[
        {
          type: "fab",
          text: "Salir",
          color: "secondary",
          icon: KeyboardBackspaceIcon,
          size: "large",
          variant: "contained",
          disabled: false,
          onClick: logout,
        },
      ]}
      rightButtons={[
        {
          type: "button",
          text: "Continuar",
          color: "primary",
          icon: DoneRoundedIcon,
          edge: "start",
          size: "large",
          variant: "contained",
          disabled: state.id !== null ? false : true,
          onClick: handleSelectBox,
        },
      ]}
      renderRefresh={[state.open]}
      loading={box_fetching || box_loading}
      scroll="body"
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

export default connect(mapStateToProps, null)(ModalSelectBox);