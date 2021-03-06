// Dependencies
import { deepOrange, pink, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// Colors
import { fade } from "@material-ui/core/styles/colorManipulator";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: teal,
    secondary: deepOrange,
    error: pink,
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      "DIDINPro-Black",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {},
});

// Palette
export const primaryColor = theme.palette.primary[500];
export const secondaryColor = theme.palette.secondary[500];
export const errorColor = theme.palette.error[500];
// Colors
export const warningColor = "#ff9800";
export const dangerColor = "#f44336";
export const successColor = "#4caf50";
export const infoColor = "#2196f3";
export const roseColor = "#e91e63";

export const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#b4b4b4",
  "#555555",
  "#333",
  "#a9afbb",
  "#eee",
  "#e7e7e7",
];
export const blackColor = "#000";
export const whiteColor = "#FFF";
export const defaultColor = "#FAFAFA";

// Global Styles
export const drawerDash = 120;
export const drawerWidth = 260;

export const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

export const containerFluid = {
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  marginRight: "auto",
  marginLeft: "auto",
  width: "auto",
};
export const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};
export const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

/*::::::::::::::::::::::::::::::::::::::::BOX-SHADOWS::::::::::::::::::::::::::::::::::::::::*/
export const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px " +
    fade(theme.palette.primary[900], 0.5) +
    ", 0 4px 20px 0px " +
    fade(theme.palette.primary[100], 0.1) +
    ", 0 7px 8px -5px " +
    fade(theme.palette.primary[500], 0.2),
};
export const secondaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px " +
    fade(theme.palette.secondary[900], 0.5) +
    ", 0 4px 20px 0px " +
    fade(theme.palette.secondary[100], 0.1) +
    ", 0 7px 8px -5px " +
    fade(theme.palette.secondary[500], 0.2),
};
export const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
};
export const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
};
export const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
};
export const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
};
export const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)",
};
export const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};
export const grayBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};
export const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

/*::::::::::::::::::::::::::::::::::::::::BUTTONS::::::::::::::::::::::::::::::::::::::::*/

/*::::::::::::::::::::::::::::::::::::::::CARDS::::::::::::::::::::::::::::::::::::::::*/
export const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  ...boxShadow,
};
export const primaryCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg," +
    theme.palette.primary[400] +
    "," +
    theme.palette.primary[500] +
    ")",
  ...primaryBoxShadow,
};
export const secondaryCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg," +
    theme.palette.secondary[400] +
    "," +
    theme.palette.secondary[500] +
    ")",
  ...secondaryBoxShadow,
};
export const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow,
};
export const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow,
};
export const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow,
};
export const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow,
};
export const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow,
};
export const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...theme.typography,
};
export const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};
export const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
};
export const cardTitle = {
  ...title,
  marginTop: ".625rem",
};
export const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};
export const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
};
