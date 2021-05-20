// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Sub-Views
import OpeningBoxes from "../../layouts/sub-views/OpeningBoxes";

function OpenBoxes() {
    return (
      <Fragment>
        <OpeningBoxes />
      </Fragment>
    );
}
// PropTypes
OpenBoxes.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default OpenBoxes;
