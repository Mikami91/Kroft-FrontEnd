// Theme
import {
	theme,
	dangerColor,
	successColor,
	warningColor,
	successBoxShadow,
	dangerBoxShadow,
	warningBoxShadow
} from '../../themes/theme';
// Colors
import { fade } from '@material-ui/core/styles/colorManipulator';

const gridStyle = {
	tables: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingTop: theme.spacing(0.7),
		paddingRight: theme.spacing(0.7),
		paddingBottom: theme.spacing(1.5),
		paddingLeft: theme.spacing(0.7),
		flexBasis: 'auto',
		[theme.breakpoints.only('sm')]: {
			paddingRight: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		},
		[theme.breakpoints.only('md')]: {
			paddingRight: theme.spacing(1.3),
			paddingLeft: theme.spacing(1.3),
			paddingTop: theme.spacing(1.5),
			paddingBottom: theme.spacing(1.5)
		},
		[theme.breakpoints.only('lg')]: {
			paddingRight: theme.spacing(2.5),
			paddingLeft: theme.spacing(2.5),
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2)
		},
		[theme.breakpoints.only('xl')]: {
			paddingRight: theme.spacing(3.5),
			paddingLeft: theme.spacing(3.5),
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3)
		}
	},
	products: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingTop: theme.spacing(2),
		paddingRight: theme.spacing(1),
		paddingBottom: theme.spacing(2),
		paddingLeft: theme.spacing(1),
		flexBasis: 'auto',
		[theme.breakpoints.only('sm')]: {
			paddingTop: theme.spacing(2),
			paddingRight: theme.spacing(1.5),
			paddingBottom: theme.spacing(2),
			paddingLeft: theme.spacing(1.5),
		},
		[theme.breakpoints.only('md')]: {
			paddingTop: theme.spacing(2.5),
			paddingRight: theme.spacing(2),
			paddingBottom: theme.spacing(2.5),
			paddingLeft: theme.spacing(2),
		},
		[theme.breakpoints.only('lg')]: {
			paddingTop: theme.spacing(3),
			paddingRight: theme.spacing(2.5),
			paddingBottom: theme.spacing(3),
			paddingLeft: theme.spacing(2.5),
		},
		[theme.breakpoints.only('xl')]: {
			paddingTop: theme.spacing(3.5),
			paddingRight: theme.spacing(3),
			paddingBottom: theme.spacing(3.5),
			paddingLeft: theme.spacing(3),
		}
	},
	green: {
		backgroundImage: 'linear-gradient(90deg,' + successColor + ',' + fade(successColor, 0.7) + ')',
		...successBoxShadow
	},
	red: {
		backgroundImage: 'linear-gradient(90deg,' + dangerColor + ',' + fade(dangerColor, 0.7) + ')',
		...dangerBoxShadow
	},
	yellow: {
		backgroundImage: 'linear-gradient(90deg,' + warningColor + ',' + fade(warningColor, 0.7) + ')',
		...warningBoxShadow
	},
	image: {
		color: "black",
		width: 65,
		height: 65,
		margin: 'auto',
		alignItems: 'center',
		[theme.breakpoints.only('sm')]: {
			width: 90,
			height: 90
		},
		[theme.breakpoints.only('md')]: {
			width: 100,
			height: 100
		},
		[theme.breakpoints.only('lg')]: {
			width: 115,
			height: 115
		},
		[theme.breakpoints.only('xl')]: {
			width: 120,
			height: 120
		}
	},
	cardNumber: {
		position: "absolute",
		padding: 2,
		marginLeft: 8,
		textAlign: "center",
		borderRadius: "50%",
		border: "solid 1px",
		height: 23,
		width: 23,
		marginTop: -20,
		[theme.breakpoints.only('sm')]: {
			width: 25,
			height: 25,
			marginTop: -22,
		},
		[theme.breakpoints.only('md')]: {
			width: 28,
			height: 28,
			marginTop: -23,
		},
		[theme.breakpoints.only('lg')]: {
			width: 32,
			height: 32,
			marginTop: -24,
		},
		[theme.breakpoints.only('xl')]: {
			width: 35,
			height: 35,
			marginTop: -25,
		}
	},
	cardText: {
		overflow: "hiden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		fontSize: "smaller",
		fontWeight: "bold",
		lineHeight: "1.4rem",
		[theme.breakpoints.only('sm')]: {
			fontSize: "small",
			lineHeight: "1.5rem",
		},
		[theme.breakpoints.only('md')]: {
			fontSize: "medium",
			lineHeight: "1.6rem",
		},
		[theme.breakpoints.only('lg')]: {
			fontSize: "larger",
			lineHeight: "1.9rem",
		},
		[theme.breakpoints.only('xl')]: {
			fontSize: "large",
			lineHeight: "2rem",
		}
	}
};

export default gridStyle;
