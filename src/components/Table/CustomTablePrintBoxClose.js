// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// UI Material Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import printBoxCloseStyle from "../../styles/components/printBoxCloseStyle";

const useStyles = makeStyles(printBoxCloseStyle);

const CustomTablePrintBoxClose = (props) => {
  const {
    box_opening,
    renderRefresh,
  } = props;

  const {
    name,
    bs_income_amount,
    us_income_amount,
    cards_income_amount,
    will_pay_income_amount,
    initial_amount,
  } = box_opening;

  let total_incomes =
  us_income_amount * 6.94 +
  bs_income_amount +
  cards_income_amount +
  will_pay_income_amount;

  let total_amount = initial_amount + total_incomes;

  // Style
  const style = useStyles();

  // Cath Date and Time
  let newDate = new Date();
  let mm = newDate.getMonth() + 1;
  let dd = newDate.getDate();
  let yy = newDate.getFullYear();
  let h = newDate.getHours();
  let mn = newDate.getMinutes();

  let currentDate = yy + "-" + mm + "-" + dd + " " + h + ":" + mn;

  //EPSON TM-T88V Receipt

  // Using useMemo hook
  return useMemo(() => {
    return (
      <Table size="small" className={style.tablePrint}>
        <TableHead>

          <TableRow>
            <TableCell className={style.tBox} align="center" colSpan={4}>
              {name.toUpperCase()}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tHead} align="left" colSpan={2}>
              CIERRE DE CAJA
            </TableCell>
            <TableCell className={style.tDate} align="right" colSpan={2}>
              {currentDate}
            </TableCell>
          </TableRow>

        </TableHead>

        <TableBody>

        <TableRow>
            <TableCell className={style.tDetail} align="left" colSpan={2}>
              Monto Inicial:
            </TableCell>
            <TableCell className={style.tTotal} align="right" colSpan={2}>
              <NumberFormat
                value={initial_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={true}
                allowLeadingZeros={true}
                decimalScale={2}
                isNumericString={true}
                fixedDecimalScale={initial_amount !== undefined ? true : false}
                renderText={(value) => `Bs ${value}`}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tIncome} align="center" colSpan={4}>
              INGRESOS
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tDetail} align="left" colSpan={2}>
              Monto Bolivianos:
            </TableCell>
            <TableCell className={style.tSubtotal} align="right" colSpan={2}>
              <NumberFormat
                value={bs_income_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={true}
                allowLeadingZeros={true}
                decimalScale={2}
                isNumericString={true}
                fixedDecimalScale={bs_income_amount !== undefined ? true : false}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tDetail} align="left" colSpan={2}>
              Monto Dolares:
            </TableCell>
            <TableCell className={style.tSubtotal} align="right" colSpan={2}>
              <NumberFormat
                value={us_income_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={true}
                allowLeadingZeros={true}
                decimalScale={2}
                isNumericString={true}
                fixedDecimalScale={us_income_amount !== undefined ? true : false}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tDetail} align="left" colSpan={2}>
              Monto Tarjetas:
            </TableCell>
            <TableCell className={style.tSubtotal} align="right" colSpan={2}>
              <NumberFormat
                  value={cards_income_amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  allowNegative={false}
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  decimalScale={2}
                  isNumericString={true}
                  fixedDecimalScale={cards_income_amount !== undefined ? true : false}
                />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tDetail} align="left" colSpan={2}>
              Monto Pagarés:
            </TableCell>
            <TableCell className={style.tSubtotal} align="right" colSpan={2}>
              <NumberFormat
                  value={will_pay_income_amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  allowNegative={false}
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  decimalScale={2}
                  isNumericString={true}
                  fixedDecimalScale={will_pay_income_amount !== undefined ? true : false}
                />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tTotal} align="left" colSpan={2}>
              MONTO TOTAL:
            </TableCell>
            <TableCell className={style.tTotal} align="right" colSpan={2}>
              <NumberFormat
                  value={total_amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  allowNegative={false}
                  allowEmptyFormatting={true}
                  allowLeadingZeros={true}
                  decimalScale={2}
                  isNumericString={true}
                  fixedDecimalScale={total_amount !== undefined ? true : false}
                  renderText={(value) => `Bs ${value}`}
                />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tGhost} align="center" colSpan={4}>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tPoints} align="center" colSpan={2}>
              ...................................
            </TableCell>
            <TableCell className={style.tPoints} align="center" colSpan={2}>
              ...................................
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tPerson} align="center" colSpan={2}>
              Cajero
            </TableCell>
            <TableCell className={style.tPerson} align="center" colSpan={2}>
              Responsable
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tGhost} align="center" colSpan={4}>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tBrand} align="center" colSpan={4}>
              KROFT SOLUTIONS
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    );
  }, [renderRefresh]);
};

// PropTypes
CustomTablePrintBoxClose.defaultProps = {
  box_opening: {
    name: "",
    bs_income_amount: 0.00,
    us_income_amount: 0.00,
    cards_income_amount: 0.00,
    will_pay_income_amount: 0.00,
    initial_amount: 0.00,
  },
  refresh: null,
};

CustomTablePrintBoxClose.propTypes = {
  box_opening: PropTypes.object,
  renderRefresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { boxes } = state;
  const cashier_id = parseInt(localStorage.getItem("employee_id"));
  const box_id = parseInt(localStorage.getItem("box_id"));
  return {
    box_opening: boxes.box_opening.find(
      (i) => i.box_id === box_id && i.cashier_id === cashier_id
    ),
  };
};

export default connect(mapStateToProps, null)(CustomTablePrintBoxClose);
