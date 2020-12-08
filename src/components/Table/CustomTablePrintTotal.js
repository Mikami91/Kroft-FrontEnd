// Dependencies
import React, { useMemo } from "react";
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
import printTotalStyle from "../../styles/components/printTotalStyle";

const useStyles = makeStyles(printTotalStyle);

const CustomTablePrintTotal = (props) => {
  const {
    // Redux
    list,
    current,
    company,
    // Props
    renderRefresh,
  } = props;
  let { table_id, table_name, table_number } = current;

  console.log(list);

  let data_filtered = [];
  for (let x in list) {
    if (list[x].table_id === table_id) {
      if (check(list[x])) {
        data_filtered.push(list[x]);
      }
    }
  }
  function check(index) {
    let flag = 0;
    for (let y in data_filtered) {
      if (data_filtered[y].product_id === index.product_id) {
        data_filtered[y].product_quantity += index.product_quantity;
        flag = 1;
      }
    }
    if (flag === 0) return true;
    else return false;
  }

  console.log(data_filtered);

  //   const filter_list = list.filter((i) => i.table_id === table_id);

  //   console.log(filter_list);

  //   let output = filter_list.reduce(function (arr, cur) {
  //     let product_name = cur.product_name;
  //     let found = arr.find((i) => i.product_name === product_name);
  //     if (found) found.product_quantity += cur.product_quantity;
  //     else arr.push(cur);
  //     return arr;
  //   }, []);
  //   console.log(output);

  //   filter_list.forEach(function (a) {
  //     if (!this[a.product_id]) {
  //       this[a.product_id] = { ...a };
  //       result.push(this[a.product_id]);
  //     }
  //     console.log(a.product_quantity);
  //     this[a.product_quantity] += a.product_quantity;
  //   }, {});

  //   console.log(result);

  const company_name =
    Object.keys(company).length === 0 ? "---" : company.name.toUpperCase();
  let table_info =
    table_name === null && table_number === null
      ? "---"
      : `${table_name} ${table_number}`.toUpperCase();

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
            <TableCell className={style.tTitle} align="center" colSpan={4}>
              Restaurante
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tRestaurant} align="center" colSpan={4}>
              {company_name}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tTable} align="left" colSpan={2}>
              {table_info}
            </TableCell>
            <TableCell className={style.tDate} align="right" colSpan={2}>
              {currentDate}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tHeadQuantity} align="left">
              Cant.
            </TableCell>
            <TableCell className={style.tHead} align="left">
              Detalle
            </TableCell>
            <TableCell className={style.tHead} align="right">
              P./U.
            </TableCell>
            <TableCell className={style.tHead} align="right">
              Subtotal
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map((i) =>
            i.table_id === table_id ? (
              <TableRow key={i.id}>
                <TableCell className={style.tQuantity} align="right">
                  {i.product_quantity}
                </TableCell>
                <TableCell className={style.tDetail} align="left">
                  {i.product_name}
                </TableCell>
                <TableCell className={style.tPrice} align="right">
                  {i.product_price}
                </TableCell>
                <TableCell className={style.tSubtotal} align="right">
                  <NumberFormat
                    value={i.product_price * i.product_quantity}
                    displayType={"text"}
                    thousandSeparator={true}
                    allowNegative={false}
                    allowEmptyFormatting={true}
                    allowLeadingZeros={true}
                    decimalScale={2}
                    isNumericString={true}
                  />
                </TableCell>
              </TableRow>
            ) : null
          )}

          <TableRow>
            <TableCell className={style.tTotal} align="right" colSpan={3}>
              Total:
            </TableCell>
            <TableCell className={style.tTotal} align="right">
              {current.total_amount}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tClientName} align="left" colSpan={4}>
              Nombre:.....................................................
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tClientCI} align="left" colSpan={4}>
              CI:...............................................................
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={style.tThanks} align="center" colSpan={4}>
              Gracias por su preferencia!!!
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
  }, [renderRefresh, current.open]);
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product, orders, company } = state;

  return {
    current: product.current,
    list: orders.orders_detail,
    company: company.payload,
  };
};

export default connect(mapStateToProps, null)(CustomTablePrintTotal);
