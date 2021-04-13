// Dependencies
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import DateRange from "@material-ui/icons/DateRange";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LocalOffer from "@material-ui/icons/LocalOffer";
import SdStorageOutlinedIcon from "@material-ui/icons/SdStorageOutlined";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Update from "@material-ui/icons/Update";
import Warning from "@material-ui/icons/Warning";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ChartistGraph from "react-chartist";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import Danger from "../../components/Typography/Danger.js";
// Styles
import styles from "../../styles/views/Dashboard/StartedStyle.js";
import {
  dailySalesChart,
  emailsSubscriptionChart
} from "../../variables/charts.js";

const useStyles = makeStyles(styles);

function Started(props) {
  const classes = useStyles();

  return (
    <Fragment>

      <Grid
        container
        justify="center"
        alignItems="flex-start"
        spacing={2}
        direction="row"
      >

        <Grid item xs={12} sm={6} md={3}>
          <Card variant="cardDash">
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <SdStorageOutlinedIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="cardDash">
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="cardDash">
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <InfoOutlinedIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="cardDash">
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card variant="cardDash" chart>
            <CardHeader color="success" stats>
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody stats>
              <h4 className={classes.cardTitleBody}>Daily Sales</h4>
              <p className={classes.cardCategoryBody}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card variant="cardDash" chart>
            <CardHeader color="warning" stats>
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody stats>
              <h4 className={classes.cardTitleBody}>Email Subscriptions</h4>
              <p className={classes.cardCategoryBody}>
                Last Campaign Performance
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </Grid>

      </Grid>

    </Fragment>
  );
}
// PropTypes
Started.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Started;
