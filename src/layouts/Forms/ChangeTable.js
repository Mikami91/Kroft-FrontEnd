// Dependencies
import React from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import ExpansionList from "../../components/CustomInput/ExpansionList.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";

export default function ChangeTable(props) {
  const { environments, tables, state, onChangeFrom, onChangeTo } = props;
  return (
    <form id="table-change" /*onSubmit={handleLogin}*/>
      {/* <Card variant="cardForm"> */}
      <CustomLoading inside borderless color="secondary" open={state.isFetch} />

      {/* <CardBody form> */}
      <Grid
        container
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
            onChange={onChangeFrom}
            value={state.from_table}
            categoryList={{
              data: environments,
              key: "id",
              value: "name",
            }}
            itemList={{
              data: tables.filter((i) => i.is_busy === 1),
              key: "id",
              value: "name",
              secondValue: "number",
            }}
            filter="environment_id"
            onClick={onChangeFrom}
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
            onChange={onChangeTo}
            value={state.to_table}
            categoryList={{
              data: environments,
              key: "id",
              value: "name",
            }}
            itemList={{
              data: tables.filter((i) => i.is_busy === 0),
              key: "id",
              value: "name",
              secondValue: "number",
            }}
            filter="environment_id"
            onClick={onChangeTo}
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
