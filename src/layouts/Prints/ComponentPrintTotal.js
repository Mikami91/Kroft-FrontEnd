// Dependencies
import React, { useRef, useMemo, Component } from "react";
import PropTypes from "prop-types";
// Print
import ReactToPrint from "react-to-print";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import CustomTablePrintTotal from "../../components/Table/CustomTablePrintTotal";

class ComponentPrint extends Component {
  render() {
    return (
      <CustomTablePrintTotal
        keys={this.props.keys}
        renderRefresh={this.props.refresh}
      />
    );
  }
}

function ComponentPrintTotal(props) {
  // Props
  const { btnID, keys, refresh } = props;

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
        <ComponentPrint
          ref={(el) => (componentRef = el)}
          keys={keys}
          refresh={refresh}
        />
      </TabPanel>
    );
  }, [refresh]);
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
    PropTypes.object,
  ]),
};

export default ComponentPrintTotal;
