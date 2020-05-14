// Dependencies
import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import UndoIcon from '@material-ui/icons/Undo';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PrintIcon from '@material-ui/icons/Print';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SendIcon from '@material-ui/icons/Send';
// core components
import AppBarIcons from '../components/AppBar/AppBarIcons.js';
import TabPanel from '../components/Panel/TabPanel';
import GridProducts from '../components/Grid/GridProducts';
import FooterAppBar from '../components/Footer/FooterAppBar.js';
// Variables
import { categories } from '../variables/categories';
import { tables } from '../variables/tables';
// Styles
import styles from '../styles/pages/SalesStyle.js';

const useStyles = makeStyles(styles);

export default function SalesPage(props) {
	const [value, setValue] = useState(0);
	const handleChange = (newValue) => {
		console.log(newValue);
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};
	const classes = useStyles();
	return (
		<Fragment>
			<AppBarIcons
				color="primary"
				selectColor="secondary"
				hoverColor="secondary"
				data={categories}
				value={value}
				onChange={handleChange}
			/>

			<div className={classes.rootMenu}>
				<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
					{categories.map((index, key) => {
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
									<GridProducts filter={index.id} data={tables} color="primary" />
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
					color: 'secondary',
					label: 'Lista de ordenes',
					float: false,
					align: 'center',
					icon: FormatListBulletedIcon,
					onClick: () => {
						alert('Lista de ordenes');
					}
				}}
				rightButtons={[
					{
						type: 'fab',
						text: categories[value].name,
						color: 'primary',
						icon: UndoIcon,
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('Salir');
						}
					},
					{
						type: 'icon',
						text: 'Impresiones',
						color: 'default',
						// icon: PrintIcon,
						edge: 'start',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('Impresiones');
						}
					},
				]}
				leftButtons={[
					{
						type: 'icon',
						text: 'Impresiones',
						color: 'default',
						icon: PrintIcon,
						edge: 'start',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('Impresiones');
						}
					},
					{
						type: 'icon',
						text: 'Cuenta total',
						color: 'default',
						icon: ListAltIcon,
						edge: false,
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('Cuenta total');
						}
					},
					{
						type: 'fab',
						text: 'Enviar orden',
						color: 'primary',
						icon: SendIcon,
						edge: 'end',
						size: 'large',
						disabled: false,
						onClick: () => {
							alert('Enviar orden');
						}
					}
				]}
			/>
		</Fragment>
	);
};
