// Dependencies
import React, { Fragment, useState } from 'react';
import { withRouter } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import Modal from 'react-awesome-modal';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PersonIcon from '@material-ui/icons/Person';
import RefreshIcon from '@material-ui/icons/Refresh';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
// core components
import AppBarTabs from '../components/AppBar/AppBarTabs.js';
import TabPanel from '../components/Panel/TabPanel';
import GridTables from '../components/Grid/GridTables';
import FooterAppBar from '../components/Footer/FooterAppBar.js';
// Pages
import Products from './Products.js';
// Variables
import { environments } from '../variables/environments';
import { tables } from '../variables/tables';
// Styles
import styles from '../styles/pages/SalesStyle.js';

const useStyles = makeStyles(styles);

function SalesPage(props) {
	console.log(props.location);
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		// console.log(newValue);
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		console.log(open);
	};
	const handleClose = () => {
		setOpen(false);
		console.log(open);
	};
	// // UseEffect
	// useEffect(() => {
	// 	if (typeof props.location.state !== "undefined") {
	// 		setValue(props.location.state.value);
	// 	}
	// 	return null;
	//   }, [value]);
	// Styles  
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
									<GridTables value={value} filter={index.id} data={tables} onClick={handleOpen} color="primary" />
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
					label: 'Actualizar',
					float: false,
					align: 'center',
					icon: RefreshIcon,
					onClick: () => {
						alert('Continua practicando con el PAIFE (:');
					}
				}}
				rightButtons={[
					{
						type: 'fab',
						text: '/',
						color: 'secondary',
						icon: KeyboardBackspaceIcon,
						size: 'large',
						disabled: false,
						// onClick: () => {
						// 	alert('Salir');
						// }
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
							alert('Perfil');
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
							alert('Cambiar de Mesa');
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
							alert('Lista de Mesas');
						}
					}
				]}
			/>

				<Modal 
                    visible={open}
                    width="100%"
                    height="100%"
                    effect="fadeInUp"
                    onClickAway={handleClose}
                >
                    <Products handleClose={handleClose} />
                </Modal>

		</Fragment>
	);
};

export default withRouter(SalesPage);
