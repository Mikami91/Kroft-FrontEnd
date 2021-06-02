// Dependencies
import React, { useRef, useMemo, Component } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// Print
import ReactToPrint from "react-to-print";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import CustomTablePrintBoxClose from "../../components/Table/CustomTablePrintBoxClose";

class ComponentPrint extends Component {
  render() {
    return <CustomTablePrintBoxClose renderRefresh={this.props.refresh} />;
  }
}

function ComponentPrintBoxClose(props) {
  const {
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
  }, [refresh]);
}
// PropTypes
ComponentPrintBoxClose.defaultProps = {
  btnID: "",
  refresh: null,
};

ComponentPrintBoxClose.propTypes = {
  btnID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  refresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default connect(null, null)(ComponentPrintBoxClose);
