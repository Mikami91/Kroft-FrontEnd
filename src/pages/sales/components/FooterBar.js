// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
// core components
import FooterAppBar from "../../../components/Footer/FooterAppBar.js";

function FooterBar(props) {
  // Props
  const {
    // Local
    refresh,
    logout,
    toggleChangeTable,
    openDrawer,
  } = props;

  return (
    <FooterAppBar
      color="inherit"
      variant="dense"
      fabButton={{
        disabled: false,
        color: "primary",
        label: "Actualizar",
        float: false,
        align: "center",
        icon: RefreshIcon,
        onClick: refresh,
      }}
      leftButtons={[
        {
          type: "fab",
          text: "Salir",
          color: "secondary",
          icon: KeyboardBackspaceIcon,
          size: "large",
          disabled: false,
          onClick: logout,
        },
        {
          type: "icon",
          text: "Perfil",
          color: "default",
          icon: PersonIcon,
          edge: "end",
          size: "large",
          disabled: false,
          onClick: null,
        },
        {
          type: "text",
          text: localStorage.getItem("user"),
          color: "default",
          margin: true,
          autoSize: true,
        },
      ]}
      rightButtons={[
        {
          type: "icon",
          text: "Cambiar de Mesa",
          color: "default",
          icon: SwapHorizIcon,
          edge: "start",
          size: "large",
          disabled: localStorage.getItem("head_area") === "1" ? false : true,
          onClick: toggleChangeTable,
        },
        {
          type: "icon",
          text: "Lista de Mesas",
          color: "default",
          icon: FormatListNumberedRtlIcon,
          edge: "end",
          size: "large",
          disabled: false,
          onClick: openDrawer,
        },
      ]}
    />
  );
}

export default connect(null, null)(FooterBar);
