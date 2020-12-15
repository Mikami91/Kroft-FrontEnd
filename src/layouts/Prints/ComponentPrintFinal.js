// Dependencies
import React, { useRef, useMemo, Component } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// Print
import ReactToPrint from "react-to-print";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import CustomTablePrintFinal from "../../components/Table/CustomTablePrintFinal";

class ComponentPrint extends Component {
  render() {
    return <CustomTablePrintFinal renderRefresh={this.props.refresh} />;
  }
}

function ComponentPrintFinal(props) {
  const {
    // Redux
    current,
    // Props
    btnID,
    refresh,
  } = props;

  // Component to Refer
  let componentRef = useRef();

  // Using useMemo hook
  return useMemo(() => {
    return (
      <TabPanel value={1} index={0}>
        <ReactToPrint
          trigger={() => (
            <button id={btnID} style={{ display: "none" }}>
              Print
            </button>
          )}
          content={() => componentRef}
        />
        <ComponentPrint ref={(el) => (componentRef = el)} refresh={refresh} />
      </TabPanel>
    );
  }, [refresh, current.open]);
}
// PropTypes
ComponentPrintFinal.defaultProps = {
  btnID: "",
  refresh: null,
};

ComponentPrintFinal.propTypes = {
  btnID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  refresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;

  return {
    current: product.current,
  };
};

export default connect(mapStateToProps, null)(ComponentPrintFinal);
