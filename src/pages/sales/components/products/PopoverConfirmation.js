// Dependencies
import React, { Fragment, useMemo } from "react";
// Conecction to Store
import { connect } from "react-redux";
// UI Material Components
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import DeleteIcon from "@material-ui/icons/Delete";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
// Core components
import CustomPopover from "../../../../components/Popover/CustomPopover";

function PopoverConfirmation(props) {
  const {
    // Local
    open,
    close,
    state,
    deleteOrders,
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <CustomPopover
        state={state}
        handleClose={close}
        content={
          <Fragment>
            <p>¿Eliminar toda la lista?</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip placement="bottom" title="Cancelar" arrow>
                <IconButton
                  aria-label="Cancelar"
                  color="inherit"
                  onClick={close}
                >
                  <CancelRoundedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip placement="bottom" title="Eliminar" arrow>
                <IconButton
                  aria-label="Eliminar"
                  color="secondary"
                  onClick={deleteOrders}
                >
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          </Fragment>
        }
      />
    );
  }, [open]);
}

export default connect(null, null)(PopoverConfirmation);
