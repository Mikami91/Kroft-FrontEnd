// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/Componentes
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// Styles
import styles from '../../styles/components/appBarStyle';
const useStyles = makeStyles(styles);

function HideOnScroll (props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

const CustomAppBar = (props) => {
	const { position, variant, color, gutters, drawer, rightButtons, leftButtons } = props;

	const classes = useStyles();
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes.dashAppBar]: drawer
	});

	return (
		<HideOnScroll {...props}>
			<AppBar position={position} color={color} className={appBarClasses}>
				<Toolbar variant={variant} disableGutters={gutters}>
					<div style={{ marginRight: 'auto' }}>
						{rightButtons.map((index, key) => {
							if (index.disabled === false && index.type === 'icon') {
								return (
									<Tooltip key={key} placement="top" title={index.text}>
										<IconButton edge={index.edge} color={index.color} onClick={index.onClick}>
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
									<Button
                    key={key}
										disabled={index.disabled}
                    color={index.color}
                    variant={index.variant}
										size={index.size}
                    onClick={index.onClick}                    
									>
										{index.icon ? <index.icon fontSize={index.size} className={classes.icons} /> : null }
                    {index.text}
									</Button>
								);
							}
						})}
					</div>

					<div style={{ marginLeft: 'auto' }}>
						{leftButtons.map((index, key) => {
							if (index.disabled === false && index.type === 'icon') {
								return (
									<Tooltip key={key} placement="top" title={index.text}>
										<IconButton color={index.color} edge={index.edge} onClick={index.onClick}>
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
									<Button
                    key={key}
										disabled={index.disabled}
                    color={index.color}
                    variant={index.variant}
										size={index.size}
                    onClick={index.onClick}                    
									>
										{index.icon ? <index.icon fontSize={index.size} className={classes.icons} /> : null }
                    {index.text}
									</Button>
								);
							}
						})}
					</div>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

// PropTypes
CustomAppBar.defaultProps = {
  // AppBar
	position: 'fixed',
	color: 'primary',
	// TooolBar
	variant: 'regular',
	gutters: false,
  drawer: false,
  // Buttons
	rightButtons: [],
	leftButtons: []
};

CustomAppBar.propTypes = {
  // AppBar
	position: PropTypes.oneOf([ 'absolute', 'fixed', 'relative', 'static', 'sticky' ]),
  color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
	// TooolBar
	variant: PropTypes.oneOf([ 'regular', 'dense' ]),
	disableGutters: PropTypes.bool,
  drawer: PropTypes.bool,
  // Buttons
	rightButtons: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([ 'icon', 'button' ]),
			text: PropTypes.string,
			color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
			icon: PropTypes.object,
      edge: PropTypes.oneOf([ 'start', 'end', false ]),
			variant: PropTypes.oneOf([ 'text', 'outlined', 'contained' ]),
			size: PropTypes.oneOf([ 'large', 'small', 'medium', 'default' ]),
			disabled: PropTypes.bool,
			onClick: PropTypes.func
		})
	),
	leftButtons: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([ 'icon', 'button' ]),
			text: PropTypes.string,
			color: PropTypes.oneOf([ 'default', 'inherit', 'primary', 'secondary', 'transparent' ]),
			icon: PropTypes.object,
      edge: PropTypes.oneOf([ 'start', 'end', false ]),
			variant: PropTypes.oneOf([ 'text', 'outlined', 'contained' ]),
			size: PropTypes.oneOf([ 'large', 'small', 'medium', 'default' ]),
			disabled: PropTypes.bool,
			onClick: PropTypes.func
		})
	),
};

export default CustomAppBar;
