import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "../../themes/theme.js";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "1em"
    }
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem"
  },
  tableResponsive: {
    width: "100%",
    // marginTop: theme.spacing(3),
    marginTop: theme.spacing(0),
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },



  // Print
  tablePrint: {
    minWidth: 280,
    maxWidth: 280,
    backgroundColor: 'white',
    color: 'black',
  },

  tTitle: {
    color: 'black',
    padding: 2,
    border: 'none',
    paddingLeft: 10,
    paddingRight: 10,
  },

  tRestaurant: {
    color: 'black',
    padding: 2,
    border: 'none',
    fontWeight: 'bold',
    fontSize: 'large',
    paddingLeft: 10,
    paddingRight: 10,
  },

  tTable: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
    fontSize: 'small',
    paddingLeft: 16,
  },

  tDate: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
    fontSize: 'small'
  },

  tHead: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
  },
  tHeadQuantity: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
    paddingLeft: 16,
  },

  tQuantity: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
    paddingLeft: 16,
  },

  tDetail: {
    color: 'black',
    padding: 2,
  },

  tPrice: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
  },

  tSubtotal: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
  },

  tTotal: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
  },

  tClientName: {
    color: 'black',
    padding: 2,
    border: 'none',
    fontWeight: 600,
    paddingTop: 5,
    paddingLeft: 16,
  },

  tClientCI: {
    color: 'black',
    padding: 2,
    border: 'none',
    fontWeight: 600,
    paddingLeft: 16,
  },

  tThanks: {
    color: 'black',
    padding: 2,
    border: 'none',
    fontWeight: 600,
    fontSize: 'medium',
    paddingLeft: 16,
  },

  tBrand: {
    color: 'black',
    padding: 2,
    border: 'none',
    fontSize: 'small',
    paddingLeft: 16,
  },


  tTableName: {
    color: 'black',
    padding: 2,
    fontWeight: 600,
    fontSize: 'small',
    whiteSpace: 'nowrap',
    paddingLeft: 16,
  },

  tCategory: {
    color: 'black',
    padding: 2,
    // border: 'none',
    fontWeight: 900,
    fontSize: 'medium',
    paddingLeft: 10,
    paddingRight: 10,
    borderTop: 'solid 1px black',
    borderBottom: 'solid 1px black',
  },

  tQuantity2: {
    minWidth: 30,
    maxWidth: 30,
    color: 'black',
    padding: 2,
    paddingRight: 25,
    fontSize: 'medium',
    fontWeight: 600,
    border: 'none',
  },

  tDetail2: {
    minWidth: 250,
    maxWidth: 250,
    color: 'black',
    padding: 2,
    fontSize: 'medium',
    fontWeight: 'bold',
    border: 'none',
  },

  tObservation: {
    color: 'black',
    padding: 2,
  },

  tGhost: {
    padding: 10,
    height: 0,
    border: 'none',
  },
});

export default tableStyle;
