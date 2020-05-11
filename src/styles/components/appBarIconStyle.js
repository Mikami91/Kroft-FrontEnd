import {
	theme,
	drawerDash,
	primaryColor,
	secondaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor
} from '../../themes/theme.js';

const appBarIconStyle = {
	appBar: {
		width: '100%',
		// backgroundColor: '#0b463b',
		top: -1
	},
	dashAppBar: {
		marginLeft: drawerDash,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerDash}px)`
		},
		// backgroundColor: '#0b463b',
		top: -1
	},
	gridIcon: {
		textAlign: "center",
		flexDirection: "column"
	},
	ActionIcon: {
		// display: "block",
		// background: "red",
		color: "#ffffffb3",
		padding: "0px 0px 5px 0px",
		borderRadius: "50%",
	},
	primaryActionIcon: {
		color: primaryColor
	},
	secondaryActionIcon: {
		color: secondaryColor
	},
	warningActionIcon: {
		color: warningColor
	},
	dangerActionIcon: {
		color: dangerColor
	},
	successActionIcon: {
		color: successColor
	},
	infoActionIcon: {
		color: infoColor
	},
	roseActionIcon: {
		color: roseColor
	},
	grayActionIcon: {
		color: '#6c757d'
	},
	icons: {
		width: '1rem',
		height: '1rem',
		[theme.breakpoints.only('sm')]: {
			width: '1.5rem',
			height: '1.5rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '2rem',
			height: '2rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '2.5rem',
			height: '2.5rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '3rem',
			height: '3rem'
		}
	},
	text: {
		fontSize: 'smaller',
		[theme.breakpoints.only('sm')]: {
			fontSize: 'small'
		},
		[theme.breakpoints.only('md')]: {
			fontSize: 'medium'
		},
		[theme.breakpoints.only('lg')]: {
			fontSize: 'large'
		},
		[theme.breakpoints.only('xl')]: {
			fontSize: 'x-large'
		}
	},
	primary: {
		backgroundColor: primaryColor
	},
	secondary: {
		backgroundColor: secondaryColor
	},
	warning: {
		backgroundColor: warningColor
	},
	danger: {
		backgroundColor: dangerColor
	},
	success: {
		backgroundColor: successColor
	},
	info: {
		backgroundColor: infoColor
	},
	rose: {
		backgroundColor: roseColor
	},
	gray: {
		backgroundColor: '#6c757d'
	},
	gridIcons: {
		paddingRight: theme.spacing(0),
		paddingLeft: theme.spacing(0),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	fabButton: {
		padding: 10,
		position: 'relative',
		zIndex: 1,
		top: 0,
		left: 0,
		right: 0,
		margin: '0 auto',
		width: '35px',
		height: '35px',
		[theme.breakpoints.only('sm')]: {
			width: '40px',
			height: '40px'
		},
		[theme.breakpoints.only('md')]: {
			width: '45px',
			height: '45px'
		},
		[theme.breakpoints.only('lg')]: {
			width: '50px',
			height: '50px'
		},
		[theme.breakpoints.only('xl')]: {
			width: '55px',
			height: '55px'
		}
	},
};

export default appBarIconStyle;
