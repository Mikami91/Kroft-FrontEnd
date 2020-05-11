// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/Componentes
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
// Styles
import styles from '../../styles/components/appBarIconStyle';

const useStyles = makeStyles(styles);

// Component
const AppBarIcons = (props) => {
	// Props
	const {
		// AppBar
		position,
		color,
		drawer,
		// Tabs
		data,
		value,
		onChange,
		selectColor,
	} = props;
	// Styles
	const classes = useStyles();
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes.dashAppBar]: drawer
	});
	// Render
	return (
		<AppBar position={position} color={color} className={appBarClasses} variant="elevation">
			<Toolbar className={classes.toolbar} >
			<Grid
				container
				spacing={1}
				direction="row"
				className={classes.gridIcons}
				justify="flex-start"
				alignItems="center"
			>
				{/* <BottomNavigation
				value={value}
				onChange={onChange}
				showLabels
				className={classes.root}
			> */}
				{data.map((index, key) => {
					const actionIconClasses = classNames({
						[classes.fabButton]: true,
						// [classes[color + "ActionIcon"]]: color,
						[classes[selectColor + "ActionIcon"]]: key === value
					});
					return (
						<Grid
							key={key}
							item
							xs={2}
							sm={1}
							md={1}
							lg={1}
							xl={1}
							elevation={0}
							className={classes.gridIcon}
						>
							<Fab
								key={key}
								disabled={index.disabled}
								value={value}
								onClick={() => onChange(key)}
								color={color}
								// size="small"
								aria-label={index.label}
								className={actionIconClasses}
							>
								<DeckRoundedIcon color={index.selectColor} className={classes.icons} />

							</Fab>
							{/* <BottomNavigationAction
								key={key}
								value={value}
								onChange={() => onChange(key)}
								showLabel
								className={actionIconClasses}
								label={
									<Typography className={classes.text} noWrap>
										{index.name}
									</Typography>
								}
								icon={<DeckRoundedIcon className={classes.icons} />}
							/> */}
						</Grid>
					);
				})}
			{/* </BottomNavigation> */}
			</Grid>
			</Toolbar>
			{/* <Tabs
				orientation={orientation}
				value={value}
				onChange={onChange}
				indicatorColor={indicatorColor}
				textColor={textColor}
				variant={variant}
				scrollButtons={scrollButtons}
				centered={centered}
			>
				{data.map((index, key) => (
					<Tab
						key={key}
						style={{ paddingTop: 2 }}

						label={
							<Typography className={classes.text} noWrap>
								{index.name}
							</Typography>
						}
						icon={<DeckRoundedIcon className={classes.icons} />}
					/>
				))}
			</Tabs> */}
		</AppBar>
	);
};

// PropTypes
AppBarIcons.defaultProps = {
	// AppBar
	position: 'fixed',
	color: 'primary',
	gutters: false,
	drawer: false,
	// Tabs
	data: [],
	value: '',
	onChange: null,
	selectColor: 'primary',
};
AppBarIcons.propTypes = {
	// AppBar
	position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
	color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),
	disableGutters: PropTypes.bool,
	drawer: PropTypes.bool,
	// Tabs
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string
		})
	),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func,
	selectColor: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'success', 'info']),
};

export default AppBarIcons;
