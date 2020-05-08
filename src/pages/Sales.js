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
import PersonIcon from '@material-ui/icons/Person';
import RefreshIcon from '@material-ui/icons/Refresh';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
// Layouts
import SalesAppBar from '../layouts/AppBars/SalesAppBar.js';
// core components
import AppBarTabs from '../components/AppBar/AppBarTabs.js';
import TabPanel from '../components/Panel/TabPanel';
import GridTables from '../components/Grid/GridTables';
import FooterAppBar from '../components/Footer/FooterAppBar.js';
// Variables
import { data } from '../variables/JSON';
import { environments } from '../variables/environments';
import { tables } from '../variables/tables';
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
				data={environments}
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				scrollButtons="auto"
			/>

			<div className={classes.rootMenu}>
				<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
					{environments.map((index, key) => {
						return (
							<TabPanel key={key} value={value} index={key}>
								<Grid
									container
									spacing={0}
									direction="row"
									className={classes.content}
									justify="flex-start"
									alignItems="flex-start"
								>
									{/* <Grid
										item
										xs={4}
										sm={3}
										md={3}
										lg={2}
										xl={1}
										direction="row"
										elevation={6}
										square="true"
										className={classes.container}
									> */}
									<GridTables filter={index.id} data={tables} />
									{/* </Grid> */}
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
					icon: RefreshIcon,
					onClick: () => {
						alert('FAB');
					}
				}}
				rightButtons={[
					{
						type: 'fab',
						text: 'Salir',
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
						text: 'Perfil',
						color: 'default',
						icon: PersonIcon,
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
						text: 'Cambiar de Mesa',
						color: 'default',
						icon: SwapHorizIcon,
						edge: 'start',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('22');
						}
					},
					{
						type: 'icon',
						text: 'Lista de Mesas',
						color: 'default',
						icon: FormatListNumberedRtlIcon,
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
