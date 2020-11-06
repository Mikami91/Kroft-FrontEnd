// Check if values is number
export const isEmptyValue = (value) => {
  if (
    value === "" ||
    value === null ||
    value === undefined ||
    value === "undefined" ||
    value.length <= 0
  ) {
    return true;
  } else {
    return false;
  }
};
