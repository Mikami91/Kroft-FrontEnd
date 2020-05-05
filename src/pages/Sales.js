// Dependencies
import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// Layouts
import SalesAppBar from '../layouts/AppBars/SalesAppBar.js';
// core components
import AppBarTabs from '../components/AppBar/AppBarTabs.js';
import TabPanel from '../components/Panel/TabPanel';
import FooterAppBar from '../components/Footer/FooterAppBar.js';
// Variables
import { data } from '../variables/JSON';
import { bugs, website, server } from '../variables/general.js';
// Styles
import styles from '../styles/pages/SalesStyle.js';

const useStyles = makeStyles(styles);

export default function SalesPage (props) {
	const [ value, setValue ] = useState(0);
	const handleChange = (event, newValue) => {
		// console.log(newValue);
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};
	// State for Card animation
	// const [cardAnimaton, setCardAnimation] = useState("cardHidden");
	// setTimeout(function () {
	//   setCardAnimation("");
	// }, 700);
	const classes = useStyles(); 
	return (
		<Fragment>
			<AppBarTabs
				color="inherit"
				data={data}
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				scrollButtons="auto"
			/>

			<div className={classes.rootMenu}>
				<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
					{data.map((index, key) => {
						return (
							<TabPanel key={key} value={value} index={key}>
								<Grid container className={classes.content} justify="center" alignItems="center">
									<Grid
										item
										xs={12}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										elevation={6}
										square="true"
										className={classes.container}
									>
										<Button>{index.name}</Button>
									</Grid>
								</Grid>
							</TabPanel>
						);
					})}
				</SwipeableViews>
			</div>

      <FooterAppBar
				color="inherit"
				variant="dense"
				fabButton={{
					disabled: false,
					color: 'primary',
					label: 'Atras',
					float: false,
					align: 'center',
					icon: Store,
					onClick: () => {
						alert('FAB');
					}
				}}
				rightButtons={[
					{
						type: 'fab',
						text: '4',
						color: 'secondary',
						icon: KeyboardBackspaceIcon,
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('22');
						}
					},
					{
						type: 'icon',
						text: '4',
						color: 'secondary',
						icon: Store,
						edge: 'end',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('22');
						}
					}
				]}
				leftButtons={[
					{
						type: 'icon',
						text: '4',
						color: 'secondary',
						icon: Store,
						edge: 'start',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('22');
						}
					},
					{
						type: 'fab',
						text: '4',
						color: 'secondary',
						icon: Store,
						edge: 'end',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('22');
						}
					}
				]}
			/>

      </Fragment>
  );
}