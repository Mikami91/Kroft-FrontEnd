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

const appBarStyle = {
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
	contentRight: {
		marginLetf: "auto",
		display: "inline-flex",
		alignItems: "center",
	  },
	  contentLeft: {
		marginRight: "auto",
		display: "inline-flex",
		alignItems: "center",
	  },
	icons: {
		width: '1.5rem',
		height: '1.5rem',
		[theme.breakpoints.only('sm')]: {
			width: '2rem',
			height: '2rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '2.5rem',
			height: '2.5rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '3rem',
			height: '3rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '3.5rem',
			height: '3.5rem'
		}
	},
	images: {
		borderRadius: 6,
		width: '3rem',
		height: '1.5rem',
		[theme.breakpoints.only('sm')]: {
			width: '4rem',
			height: '2rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '5rem',
			height: '2.5rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '6rem',
			height: '3rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '7rem',
			height: '3.5rem'
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
	}
};

export default appBarStyle;
