// Dependencies
import React, { useState } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
// Layouts
import DrawerList from "../../../layouts/Drawers/DrawerTablesList.js";
// core components
import FooterAppBar from "../../../components/Footer/FooterAppBar.js";

function FooterBar(props) {
  // Props
  const {
    // Local
    refresh,
    logout,
    openBox,
    openDrawer,
    // Redux
    environments,
    tables,
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
          text: "Caja",
          color: "default",
          icon: PaymentRoundedIcon,
          size: "large",
          margin: true,
          disabled: false,
          onClick: openBox,
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
// Connect to Store State
const mapStateToProps = (state) => {
  const { tables, environments } = state;
  return {
    environments: environments.payload,
    tables: tables.payload,
  };
};

export default connect(mapStateToProps, null)(FooterBar);
