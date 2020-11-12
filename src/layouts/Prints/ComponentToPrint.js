// Dependencies
import React, { useRef, useMemo, Component } from "react";
import PropTypes from "prop-types";
// Print
import ReactToPrint from "react-to-print";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import CustomTableToPrints from "../../components/Table/CustomTableToPrints";

class ComponentPrint extends Component {
  render() {
    return (
      <CustomTableToPrints
        data={this.props.data}
        renderRefresh={this.props.refresh}
      />
    );
  }
}

function ComponentToPrint(props) {
  // Props
  const { btnID, printList, refresh } = props;

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
          data={printList}
          refresh={refresh}
        />
      </TabPanel>
    );
  }, [refresh]);
}
// PropTypes
ComponentToPrint.defaultProps = {
  btnID: "",
  printList: [],
  refresh: null,
};

ComponentToPrint.propTypes = {
  btnID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  printList: PropTypes.arrayOf(PropTypes.object).isRequired,
  refresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
};

export default ComponentToPrint;
