import { drawerWidth, drawerDash, transition, boxShadow, container, theme } from '../../themes/theme.js';

const SalesStyle = {
	content: {
		border: '0',
		borderRadius: '6px',
		color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff',
		// background: theme.palette.type === "light" ? "#fff" : "#424242",
		// boxShadow:
		//   "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		wordWrap: 'break-word',
		fontSize: '.875rem',
		transition: 'all 300ms linear',
		width: 'auto',
		height: '73vh',
		overflowY: 'auto',
		marginTop: '8.5vh',
		alignContent: 'flex-start',
		paddingTop: theme.spacing(0),
		paddingBottom: theme.spacing(0),
		paddingRight: theme.spacing(0),
		paddingLeft: theme.spacing(0),
		[theme.breakpoints.only('sm')]: {
      height: "75vh",
      marginTop: "6.5vh",
		},
		[theme.breakpoints.only('md')]: {
      height: "76vh",
      marginTop: "6.5vh",
		},
		[theme.breakpoints.only('lg')]: {
      height: "72vh",
      marginTop: "7vh",
		},
		[theme.breakpoints.only('xl')]: {
      height: "72vh",
      marginTop: "7vh",
		}
	},
	root: {
		flexGrow: 1,
		display: 'flex'
	},
	titleH: {
		width: '100%',
		alignContent: 'center',
		textAlign: 'center',
		padding: '25px 0'
	},
	titleV: {
		width: '100%',
		alignContent: 'center',
		textAlign: 'center',
		padding: '25px 0'
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerDash,
			flexShrink: 0
		}
	},
	rootMenu: {
		[theme.breakpoints.down('xs')]: {
			flexGrow: 1,
			marginTop: 10,
			overflow: 'hidden'
		},
		[theme.breakpoints.up('sm')]: {
			flexGrow: 1,
			marginTop: 20,
			overflow: 'hidden'
		},
		[theme.breakpoints.up('md')]: {
			flexGrow: 1,
			marginTop: 15,
			overflow: 'hidden'
		},
		[theme.breakpoints.up('lg')]: {
			flexGrow: 1,
			marginTop: 20,
			overflow: 'hidden'
		}
	},

	buttonNavDash: {
		height: '63',
		paddingLeft: 5,
		paddingRight: 5,
		display: 'grid',
		textAlign: 'center',
		lineHeight: 100
	},

	drawerPaper: {
		border: 'none',
		position: 'fixed',
		top: '0',
		bottom: '0',
		left: '0',
		zIndex: 99999,
		...boxShadow,
		width: drawerDash,
		[theme.breakpoints.up('md')]: {
			width: drawerDash,
			position: 'fixed',
			height: '100%'
		},
		[theme.breakpoints.down('sm')]: {
			width: drawerDash,
			...boxShadow,
			position: 'fixed',
			display: 'block',
			top: '0',
			height: '100vh',
			right: '0',
			// left: "auto",
			zIndex: '1032',
			visibility: 'visible',
			overflowY: 'visible',
			borderTop: 'none',
			textAlign: 'left',
			paddingRight: '0px',
			paddingLeft: '0',
			transform: `translate3d(${drawerDash}px, 0, 0)`,
			...transition
		}
	}
};

export default SalesStyle;
