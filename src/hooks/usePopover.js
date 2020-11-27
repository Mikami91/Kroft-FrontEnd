// Dependencies
import { useState } from "react";
// Actions Creators
import { add_obs, delete_obs } from "../redux/actions/creators/productCreator";

export const useObservationPopover = () => {
  const [observationState, setObservationState] = useState({
    open: false,
    anchorEl: null,
    product_id: null,
    observation: "",
  });
  // Open observation
  const openObservation = (e, id, observation) => {
    setObservationState({
      open: true,
      anchorEl: e.currentTarget,
      product_id: id,
      observation: observation,
    });
  };
  // Close observation
  const closeObservation = () => {
    setObservationState({
      open: false,
      anchorEl: null,
      product_id: null,
      observation: "",
    });
  };
  // Save observation
  const saveObservation = () => {
    add_obs({
      product_id: observationState.product_id,
      observation: document.getElementById("textarea").value,
    });
    closeObservation();
  };
  // Delete observation
  const deleteObservation = () => {
    delete_obs({ product_id: observationState.product_id });
    closeObservation();
  };
  return [
    observationState,
    openObservation,
    closeObservation,
    saveObservation,
    deleteObservation,
  ];
};

export const useConfirmationPopover = () => {
  const [confirmationState, setConfirmationState] = useState({
    open: false,
    anchorEl: null,
  });
  // Open confirmation
  const openConfirmation = (e) => {
    setConfirmationState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };
  // Close confirmation
  const closeConfirmation = (e) => {
    setConfirmationState({
      open: false,
      anchorEl: null,
    });
  };
  return [confirmationState, openConfirmation, closeConfirmation];
};
