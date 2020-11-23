// Dependencies
import { useState } from "react";

export const useChangeTable = () => {
  const [tableChangeState, setTableChangeState] = useState({
    from_table: "",
    from_table_name: "",
    from_table_number: null,
    to_table: "",
    to_table_name: "",
    to_table_number: null,
  });
  const handleChangeFrom = (arg) => {
    setTableChangeState({
      ...tableChangeState,
      from_table: arg.id,
      from_table_name: arg.name,
      from_table_number: arg.number,
    });
  };

  const handleChangeTo = (arg) => {
    setTableChangeState({
      ...tableChangeState,
      to_table: arg.id,
      to_table_name: arg.name,
      to_table_number: arg.number,
    });
  };

  const emptyTableChangeState = () => {
    setTableChangeState({
      from_table: "",
      from_table_name: "",
      from_table_number: null,

      to_table: "",
      to_table_name: "",
      to_table_number: null,
      isFetch: false,
    });
  };

  return [
    tableChangeState,
    handleChangeFrom,
    handleChangeTo,
    emptyTableChangeState,
  ];
};
