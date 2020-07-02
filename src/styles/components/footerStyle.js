import { container, primaryColor, theme } from "../../themes/theme.js";

const footerStyle = {
  toolbar: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  footerAppBar: {
    top: 'auto',
    bottom: 0,
    position: "fixed",
    // backgroundColor: '#0b463b',
  },
  floatChip: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    right: 0,
    margin: '0 auto',
    width: 'auto',
    top: "-3.5rem",
    [theme.breakpoints.only('sm')]: {
      top: "-3.7rem",
		},
		[theme.breakpoints.only('md')]: {
      top: "-4.2rem",
		},
		[theme.breakpoints.only('lg')]: {
      top: "-4.3rem",
		},
		[theme.breakpoints.only('xl')]: {
      top: "-4.5rem",
		}
  },
  fabButtonFloat: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
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
  contentRight: {
    marginLeft: "auto",
    display: "inline-flex",
    alignItems: "center",
    padding: "0px 4px 0px 4px",
  },
  contentLeft: {
    marginRight: "auto",
    display: "inline-flex",
    alignItems: "center",
    padding: "0px 4px 0px 4px",
  },
  leftFabFloat: {
    right: "16px",
    margin: '0',

  },
  centerFabFloat: {
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  rightFabFloat: {
    left: "16px",
    margin: '0',
  },
  fabButton: {
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
  leftFab: {
    marginRight: '16px',

  },
  rightFab: {
    marginLeft: '16px',
  },
  icons: {
		width: '1.3rem',
		height: '1.3rem',
		[theme.breakpoints.only('sm')]: {
			width: '1.6rem',
			height: '1.6rem'
		},
		[theme.breakpoints.only('md')]: {
			width: '2rem',
			height: '2rem'
		},
		[theme.breakpoints.only('lg')]: {
			width: '2.3rem',
			height: '2.3rem'
		},
		[theme.breakpoints.only('xl')]: {
			width: '2.6rem',
			height: '2.6rem'
		}
  },
  text: {
    color: "#fff",
    margin: "0px 10px 0px 10px",
		overflow: "hiden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		fontSize: "smaller",
		fontWeight: "500",
    lineHeight: "1.4rem",
    maxWidth: "0rem",
		[theme.breakpoints.only('sm')]: {
			fontSize: "small",
      lineHeight: "1.5rem",
      maxWidth: "5rem",
		},
		[theme.breakpoints.only('md')]: {
			fontSize: "medium",
      lineHeight: "1.6rem",
      maxWidth: "6rem",
		},
		[theme.breakpoints.only('lg')]: {
			fontSize: "medium",
      lineHeight: "1.9rem",
      maxWidth: "9rem",
		},
		[theme.breakpoints.only('xl')]: {
			fontSize: "larger",
      lineHeight: "2rem",
      maxWidth: "10rem",
		}
	},




  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block" 
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footerLogin: {
    padding: 5,
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
