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
		paddingBottom: theme.spacing(0.7),
		paddingLeft: theme.spacing(0.7),
		flexBasis: 'auto',
		[theme.breakpoints.only('sm')]: {
			paddingRight: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		},
		[theme.breakpoints.only('md')]: {
			paddingRight: theme.spacing(3),
			paddingLeft: theme.spacing(3),
			paddingTop: theme.spacing(1.5),
			paddingBottom: theme.spacing(1.5)
		},
		[theme.breakpoints.only('lg')]: {
			paddingRight: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2)
		},
		[theme.breakpoints.only('xl')]: {
			paddingRight: theme.spacing(6),
			paddingLeft: theme.spacing(6),
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4)
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
	}
};

export default gridStyle;
