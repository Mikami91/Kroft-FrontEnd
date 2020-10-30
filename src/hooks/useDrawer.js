// Dependencies
import { useState } from "react";

export const useDrawer = (initialState = false) => {
  const [openDrawer, setOpenDrawer] = useState(initialState);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  return [openDrawer, toggleDrawer];
};
