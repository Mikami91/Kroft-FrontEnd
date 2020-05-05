// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/Componentes
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
// Styles
import styles from '../../styles/components/footerStyle';

const useStyles = makeStyles(styles);

// Component
const FooterAppBar = (props) => {
	// Props
	const { fabButton, rightButtons, leftButtons, color, position, variant, drawer } = props;
	// Styles
	const classes = useStyles();
	const footerClasses = classNames({
		[classes.footerAppBar]: true,
		[classes.footerLogin]: drawer
	});
	// Render
	return (
		<AppBar position={position} color={color} className={footerClasses} variant="elevation">
			<Toolbar variant={variant}>
				<div style={{ marginRight: 'auto' }}>
					{rightButtons.map((index, key) => {
						if (index.disabled === false && index.type === 'icon') {
							return (
								<Tooltip key={key} placement="top" title={index.text}>
									<IconButton edge={index.edge} onClick={index.onClick}>
										{<index.icon fontSize={index.size} />}
									</IconButton>
								</Tooltip>
							);
						}
						if (index.disabled === true && index.type === 'icon') {
							return (
								<IconButton key={key} edge={index.edge} disabled>
									{<index.icon fontSize={index.size} />}
								</IconButton>
							);
						} else {
							return (
								<Fab
									key={key}
									disabled={index.disabled}
									color={index.color}
									size="small"
									aria-label={index.label}
									onClick={index.onClick}
									className={classes.fabButton + ' ' + classes.rightFab}
								>
									<index.icon />
								</Fab>
							);
						}
					})}
				</div>

				{Object.keys(fabButton).length >= 1 ? (
					<Fab
						disabled={fabButton.disabled}
						color={fabButton.color}
						size="small"
						aria-label={fabButton.label}
						onClick={fabButton.onClick}
						className={classes.fabButtonFloat + ' ' + classes[fabButton.align + 'FabFloat']}
					>
						<fabButton.icon />
					</Fab>
				) : null}

				<div style={{ marginLeft: 'auto' }}>
					{leftButtons.map((index, key) => {
						if (index.disabled === false && index.type === 'icon') {
							return (
								<Tooltip key={key} placement="top" title={index.text}>
									<IconButton edge={index.edge} onClick={index.onClick}>
										{<index.icon fontSize={index.size} />}
									</IconButton>
								</Tooltip>
							);
						}
						if (index.disabled === true && index.type === 'icon') {
							return (
								<IconButton key={key} edge={index.edge} disabled>
									{<index.icon fontSize={index.size} />}
								</IconButton>
							);
						} else {
							return (
								<Fab
									key={key}
									disabled={index.disabled}
									color={index.color}
									size="small"
									aria-label={index.label}
									onClick={index.onClick}
									className={classes.fabButton + ' ' + classes.leftFab}
								>
									<index.icon />
								</Fab>
							);
						}
					})}
				</div>
			</Toolbar>
		</AppBar>
	);
};

// PropTypes
FooterAppBar.defaultProps = {
	// AppBar
	position: 'fixed',
	color: 'primary',
	// TooolBar
	variant: 'regular',
	// Buttons
	fabButton: {},
	rightButtons: [],
	leftButtons: []
};
FooterAppBar.propTypes = {
	// AppBar
	position: PropTypes.oneOf([ 'absolute', 'fixed', 'relative', 'static', 'sticky' ]),
	color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
	// TooolBar
	variant: PropTypes.oneOf([ 'regular', 'dense' ]),
	// Buttons
	fabButton: PropTypes.shape({
		disabled: PropTypes.bool,
		color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
		label: PropTypes.string,
		float: PropTypes.bool,
		align: PropTypes.oneOf([ 'right', 'center', 'left' ]),
		icon: PropTypes.object,
		onClick: PropTypes.func
	}),
	fabButton1: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([ 'icon', 'fab' ]),
			text: PropTypes.string,
			color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
			icon: PropTypes.array,
			edge: PropTypes.oneOf([ 'start', 'end', false ]),
			size: PropTypes.oneOf([ 'large', 'small', 'default' ]),
			disabled: PropTypes.bool,
			onClick: PropTypes.func
		})
	),
	rightButtons: PropTypes.array,
	leftButtons: PropTypes.array
};

export default FooterAppBar;
