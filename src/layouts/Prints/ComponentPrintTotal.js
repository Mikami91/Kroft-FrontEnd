// Dependencies
import React, { useRef, useMemo, Component } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// Print
import ReactToPrint from "react-to-print";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import CustomTablePrintTotal from "../../components/Table/CustomTablePrintTotal";

class ComponentPrint extends Component {
  render() {
    return <CustomTablePrintTotal renderRefresh={this.props.refresh} />;
  }
}

function ComponentPrintTotal(props) {
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
ComponentPrintTotal.defaultProps = {
  btnID: "",
  refresh: null,
};

ComponentPrintTotal.propTypes = {
  btnID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  refresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;

  return {
    current: product.current,
  };
};

export default connect(mapStateToProps, null)(ComponentPrintTotal);
