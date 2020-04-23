// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
// @material-ui/Componentes
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Core Components
import AvatarTable from "../../components/Avatar/AvatarTable.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Tasks from "../../components/Tasks/Tasks.js";
import Danger from "../../components/Typography/Danger.js"; 
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SdStorageOutlinedIcon from '@material-ui/icons/SdStorageOutlined';
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReportIcon from '@material-ui/icons/BugReport';
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// Layouts
import EmployeeAdd from '../../layouts/Forms/EmployeeAdd.js';
// Variables
import { bugs, website, server } from "../../variables/general.js";
import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart 
  } from "../../variables/charts.js";
// Styles
import styles from '../../styles/views/Dashboard/StartedStyle.js';

const useStyles = makeStyles(styles);


const Started = () => {
    const classes = useStyles();
    // TabPanel Swipeables Views
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Fragment>

            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
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
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    Get more space
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
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
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
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
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
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
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
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
                            <p className={classes.cardCategoryBody}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> campaign sent 2 days ago
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card variant="cardDash" chart>
                        <CardHeader color="danger" stats>
                            <ChartistGraph
                                className="ct-chart"
                                data={completedTasksChart.data}
                                type="Line"
                                options={completedTasksChart.options}
                                listener={completedTasksChart.animation}
                            />
                        </CardHeader>
                        <CardBody stats>
                            <h4 className={classes.cardTitleBody}>Completed Tasks</h4>
                            <p className={classes.cardCategoryBody}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> campaign sent 2 days ago
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                        title="Tasks:"
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Bugs",
                                tabIcon: BugReportIcon,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={bugs}
                                    />
                                )
                            },
                            {
                                tabName: "Website",
                                tabIcon: Code,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0]}
                                        tasksIndexes={[0, 1]}
                                        tasks={website}
                                    />
                                )
                            },
                            {
                                tabName: "Server",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[1]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={server}
                                    />
                                )
                            }
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card variant="cardDash">
                        <CardHeader color="warning" stats>
                            <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                            <p className={classes.cardCategoryWhite}>
                                New employees on 15th September, 2016
                            </p>
                        </CardHeader>
                        <CardBody stats>
                            <CustomTable
                                tableHeaderColor="warning"
                                tableHead={["ID", "Name", "Salary", "Country"]}
                                tableData={[
                                    ["1", "Dakota Rice", "$36,738", "Niger"],
                                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>

        </Fragment>
    );
};

// PropTypes
Started.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
};

export default Started;
