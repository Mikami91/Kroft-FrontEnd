// Dependencies
import React, { useMemo } from "react";
// Conecction to Store
import { connect } from "react-redux";
// UI Material Components
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteIcon from "@material-ui/icons/Delete";
// Core components
import ObservationPopover from "../../../../components/Popover/ObservationPopover";

function PopoverObservation(props) {
  const {
    // Local
    open,
    close,
    state,
    saveObs,
    deleteObs,
    // Redux
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <ObservationPopover
        state={state}
        handleClose={close}
        content={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              autoFocus={state.observation === "" ? true : false}
              id="textarea"
              label="Observación"
              multiline
              rowsMax="4"
              inputProps={{ maxLength: 40 }}
              name="observation"
              defaultValue={state.observation}
              margin="normal"
              variant="outlined"
            />
            <Tooltip placement="bottom" title="Cancelar" arrow>
              <IconButton aria-label="Cancelar" color="inherit" onClick={close}>
                <CancelRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title="Eliminar" arrow>
              <span>
                <IconButton
                  aria-label="Eliminar"
                  color="secondary"
                  disabled={state.observation === "" ? true : false}
                  onClick={deleteObs}
                >
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip placement="bottom" title="Guardar" arrow>
              <IconButton
                aria-label="Guardar"
                color="primary"
                onClick={saveObs}
              >
                <CheckCircleRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
        }
      />
    );
  }, [open]);
}

export default connect(null, null)(PopoverObservation);
