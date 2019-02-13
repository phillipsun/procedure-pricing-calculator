import axios from "axios";

export const GET_PROCEDURES = "GET_PROCEDURES";
export const SELECT_PROCEDURE = "SELECT_PROCEDURE";
export const DESELECT_PROCEDURE = "DESELECT_PROCEDURE";
export const CLEAR_PROCEDURES = "CLEAR_PROCEDURES";
export const APPLY_DISCOUNT = "APPLY_DISCOUNT";

export const getProcedures = () => async dispatch => {
  const res = await axios.get(
    // for any other customer, change filing name here and the same result should follow
    "https://moralesrolando.doctorlogicsitesstage.com/?json=true"
  );

  dispatch({
    type: GET_PROCEDURES,
    payload: res.data
  });
};

export const selectProcedure = procedure => async dispatch => {
  await dispatch({
    type: SELECT_PROCEDURE,
    payload: procedure
  });
};

export const deselectProcedure = procedure => async dispatch => {
  //console.log(procedure.Label);
  await dispatch({
    type: DESELECT_PROCEDURE,
    payload: procedure
  });
};

export const clearProcedures = () => async dispatch => {
  await dispatch({
    type: CLEAR_PROCEDURES
  });
};

export const applyDiscount = procedure => async dispatch => {
  await dispatch({
    type: APPLY_DISCOUNT,
    payload: procedure
  });
};
