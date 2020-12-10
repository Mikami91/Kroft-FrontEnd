// Dependencies
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";

const NotFound = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        height: "100vh",
        color: "white",
        fontSize: "xx-large",
        fontFamily: "cursive",
        textShadow: "3px 3px 3px #272727",
        flexDirection: "column",
        lineHeight: 0,
      }}
    >
      <h3>Error 404</h3>
      <h1>Page no found</h1>
    </Grid>
  );
};

export default NotFound;
