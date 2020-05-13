import {
	theme,
	drawerDash,
	primaryColor,
	secondaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	primaryBoxShadow,
	secondaryBoxShadow,
	warningBoxShadow,
	dangerBoxShadow,
	successBoxShadow,
	infoBoxShadow,
	roseBoxShadow,
	grayBoxShadow
} from '../../themes/theme.js';

const appBarIconStyle = {
	appBar: {
		width: '100%',
		flexDirection: "row",
		textAlign: "center",
		alignContent: "flex-start",
		alignItems: "center",
		paddingRight: theme.spacing(0.5),
		paddingLeft: theme.spacing(0.5),
		top: -1,
	},
	toolbar: {
		paddingTop: 2,
		paddingRight: 2,
		paddingBottom: 2,
		paddingLeft: 2,
	},
	dashAppBar: {
		marginLeft: drawerDash,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerDash}px)`
		},
		flexDirection: "row",
		textAlign: "center",
		alignContent: "flex-start",
		alignItems: "center",
		paddingRight: theme.spacing(0.5),
		paddingLeft: theme.spacing(0.5),
		top: -1
	},
	// gridIcon: {
	// 	textAlign: "center",
	// 	flexDirection: "column",
	// 	paddingTop: 2,
	// 	paddingRight: 3,
	// 	paddingBottom: 2,
	// 	paddingLeft: 3,
	// },
	gridIcons: {
		color: theme.palette.type === "light" ? "#424242" : "#fff",
		textAlign: "center",
		alignContent: "flex-start",
		alignItems: "center",
		marginTop: "0rem",
		marginBottom: "0rem",
		paddingRight: theme.spacing(0.5),
		paddingLeft: theme.spacing(0.5),
		paddingTop: theme.spacing(0),
		paddingBottom: theme.spacing(0),
		[theme.breakpoints.only('sm')]: {
			paddingRight: theme.spacing(0.8),
			paddingLeft: theme.spacing(0.8),
			marginTop: "0.1rem",
			marginBottom: "0.1rem",
		},
		[theme.breakpoints.only('md')]: {
			paddingRight: theme.spacing(1.5),
			paddingLeft: theme.spacing(1.5),
			marginTop: "0.1rem",
			marginBottom: "0.1rem",
		},
		[theme.breakpoints.only('lg')]: {
			paddingRight: theme.spacing(1.8),
			paddingLeft: theme.spacing(1.8),
			marginTop: "0.1rem",
			marginBottom: "0.1rem",
		},
		[theme.breakpoints.only('xl')]: {
			paddingRight: theme.spacing(2.1),
			paddingLeft: theme.spacing(2.1),
			marginTop: "0.2rem",
			marginBottom: "0.2rem",
		},
	},
	fabButton: {
		background: theme.palette.type === "light" ? "#fff" : "#424242",
		position: 'relative',
		zIndex: 1,
		top: 0,
		left: 0,
		right: 0,
		marginTop: "0.5rem",
		marginBottom: "0.5rem",
		width: '2.4rem',
		height: '2.4rem',
		[theme.breakpoints.only('sm')]: {
			width: '2.8rem',
			height: '2.8rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '3.5rem',
			height: '3.5rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '4.5rem',
			height: '4.5rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '5rem',
			height: '5rem'
		},
	},
	image: {
		objectFit: "cover",
		objectPosition: "center",
		width: '2.2rem',
		height: '2.2rem',
		[theme.breakpoints.only('sm')]: {
			width: '2.6rem',
			height: '2.6rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '3.2rem',
			height: '3.2rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '4.3rem',
			height: '4.3rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '4.8rem',
			height: '4.8rem'
		},
	},
	// Select
	primarySelectFabButton: {
		background: primaryColor,
		color: primaryColor,
		...primaryBoxShadow,
	},
	secondarySelectFabButton: {
		background: secondaryColor,
		color: secondaryColor,
		...secondaryBoxShadow,
	},
	warningSelectFabButton: {
		background: warningColor,
		color: warningColor,
		...warningBoxShadow,
	},
	dangerSelectFabButton: {
		background: dangerColor,
		color: dangerColor,
		...dangerBoxShadow,
	},
	successSelectFabButton: {
		background: successColor,
		color: successColor,
		...successBoxShadow,
	},
	infoSelectFabButton: {
		background: infoColor,
		color: infoColor,
		...infoBoxShadow,
	},
	roseSelectFabButton: {
		background: roseColor,
		color: roseColor,
		...roseBoxShadow,
	},
	graySelectFabButton: {
		background: "#6c757d",
		color: '#6c757d',
		...grayBoxShadow,
	},
	// Hover
	primaryHoverFabButton: {
		"&:hover": {
			background: primaryColor,
			...primaryBoxShadow,
		},
	},
	secondaryHoverFabButton: {
		"&:hover": {
			background: secondaryColor,
			...secondaryBoxShadow,
		},
	},
	warningHoverFabButton: {
		"&:hover": {
			background: warningColor,
			...warningBoxShadow,
		},
	},
	dangerHoverFabButton: {
		"&:hover": {
			background: dangerColor,
			...dangerBoxShadow,
		},
	},
	successHoverFabButton: {
		"&:hover": {
			background: successColor,
			...successBoxShadow,
		},
	},
	infoHoverFabButton: {
		"&:hover": {
			background: infoColor,
			...infoBoxShadow,
		},
	},
	roseHoverFabButton: {
		"&:hover": {
			background: roseColor,
			...roseBoxShadow,
		},
	},
	grayHoverFabButton: {
		"&:hover": {
			background: "#6c757d",
			...grayBoxShadow,
		},
	},
	icons: {
		width: '1rem',
		height: '1rem',
		[theme.breakpoints.only('sm')]: {
			width: '1.3rem',
			height: '1.3rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '1.6rem',
			height: '1.6rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '1.9rem',
			height: '1.9rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '2.2rem',
			height: '2.2rem'
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
};

export default appBarIconStyle;
