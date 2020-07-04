// Dependencies
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// core components
import ExpansionList from "../../components/CustomInput/ExpansionList.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
// Styles
import styles from "../../styles/pages/LoginStyle.js";
// Make styles
const useStyles = makeStyles(styles);
// Configs
moment.locale("en");
moment().format("l");

export default function ChangeTable(props) {
  const { environments, tables } = props;
  // Local State
  const [state, setState] = useState({
    from_table: "",
    to_table: "",
    isFetch: false
  });

  // Changes State values
  const handleChangeFrom = (e) => {
    // console.log(e.target)
    setState({
      ...state,
      from_table: e.target.value,
    });
  };

  const handleChangeTo = (e) => {
    setState({
      ...state,
      to_table: e.target.value,
    });
  };

  // Empty State values
  const handleEmpty = () => {
    setState({
      ...state,
      from_table: "",
      to_table: "",
      isFetch: false
    });
  };

  // Change function
  //   const handleChangeTable = (e) => {
  //     e.preventDefault();
        // setState({ ...state, isFetch : true });
  //     tableChangeAction(state).then((response) => {
  //       //console.log(response)
  //       if (typeof response !== 'undefined') {
  //         if (response === true) {
  //           handleEmpty();
  //           close();
  //         }
  //       }
  //     })
  //   };
  const classes = useStyles();
  return (
    <form id="table-change" /*onSubmit={handleLogin}*/>
      {/* <Card variant="cardForm"> */}
        <CustomLoading inside borderless color="secondary" open={state.isFetch} />

        {/* <CardBody form> */}
          <Grid
            container
            //   className={classes.content}
            justify="center"
            alignItems="flex-start"
            spacing={2}
            direction="row"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              elevation={6}
              square="true"
            >
              <ExpansionList
                variant="standard"
                margin="dense"
                color="primary"
                hoverColor="primary"
                // disabled={showProgress}
                id="from_table"
                label="De mesa"
                name="from_table"
                onChange={handleChangeFrom}
                value={state.from_table}
                categoryList={{
                  data: environments,
                  key: "id",
                  value: "name",
                }}
                itemList={{
                  data: tables,
                  key: "id",
                  value: "name",
                }}
                filter="environment_id"
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              elevation={6}
              square="true"
            >
              <ExpansionList
                variant="standard"
                margin="dense"
                color="primary"
                hoverColor="primary"
                // disabled={showProgress}
                id="to_table"
                label="A mesa"
                name="to_table"
                onChange={handleChangeTo}
                value={state.to_table}
                categoryList={{
                  data: environments,
                  key: "id",
                  value: "name",
                }}
                itemList={{
                  data: tables,
                  key: "id",
                  value: "name",
                }}
                filter="environment_id"
                required
              />
            </Grid>
          </Grid>
        {/* </CardBody> */}

        {/* <CardFooter form>
          <CustomBotton
            form="table-add"
            size="sm"
            type="submit"
            disabled={state.isUpload}
          >
            Cambiar
          </CustomBotton>
        </CardFooter> */}

      {/* </Card> */}
    </form>
  );
}
