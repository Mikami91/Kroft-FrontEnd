// Dependencies
import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// UI Material Components
import Zoom from "@material-ui/core/Zoom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

// Childs Components
const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

function LogoutConfirmation(props) {
  const {
    // Redux
    employee_loading,
    // Props
    open,
    close,
    isCashier,
    handleLogout,
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <Dialog
        open={open}
        onClose={close}
        TransitionComponent={Transition}
        maxWidth={"xs"}
        fullWidth={true}
        keepMounted
      >
        <DialogTitle>{"¿Deseas cerrar sesión?"}</DialogTitle>
        {isCashier ? (
          <DialogContent>
            <DialogContentText>
              La apertura de caja continuará abierta hasta el cierre de caja.
            </DialogContentText>
          </DialogContent>
        ) : null}
        <DialogActions>
          <Button
            color="default"
            variant="text"
            onClick={close}
            disabled={employee_loading}
          >
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            onClick={handleLogout}
            disabled={employee_loading}
          >
            Cerrar Sesión
          </Button>
        </DialogActions>
      </Dialog>
    );
  }, [open]);
}
// Proptypes
LogoutConfirmation.defaultProps = {
  isCashier: false,
};
LogoutConfirmation.propTypes = {
  isCachier: PropTypes.bool,
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { employee } = state;
  return {
    employee_loading: employee.loading,
  };
};

export default connect(mapStateToProps, null)(LogoutConfirmation);
