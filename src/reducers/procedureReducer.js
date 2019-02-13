import {
  GET_PROCEDURES,
  SELECT_PROCEDURE,
  DESELECT_PROCEDURE,
  CLEAR_PROCEDURES,
  APPLY_DISCOUNT
} from "../actions/procedureActions";

const initialState = {
  procedures: [],
  categories: [],
  selectedProcedures: [],
  selectedMin: 0,
  selectedMax: 0,
  discount: 0,
  discountedSelectedMin: 0,
  discountedSelectedMax: 0
};

const procedureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROCEDURES:
      return {
        ...state,
        procedures: action.payload.MasterPage.Procedures,
        categories: action.payload.Categories
      };
    case SELECT_PROCEDURE:
      //console.log(500 * state.selectedProcedures.length);
      return {
        ...state,
        procedures: state.procedures.map(procedure =>
          procedure.ProcedureId === action.payload.ProcedureId
            ? { ...procedure, isSelected: true }
            : procedure
        ),
        selectedProcedures: [...state.selectedProcedures, action.payload.Label],
        discount: 500 * state.selectedProcedures.length || 0,
        selectedMin: state.selectedMin + action.payload.MinimumPrice,
        selectedMax: state.selectedMax + action.payload.MaximumPrice,
      };
    case DESELECT_PROCEDURE:
      return {
        ...state,
        procedures: state.procedures.map(procedure =>
          procedure.ProcedureId === action.payload.ProcedureId
            ? { ...procedure, isSelected: false }
            : procedure
        ),
        selectedProcedures: state.selectedProcedures.filter(procedure => procedure !== action.payload.Label),
        discount: state.discount - 500,
        selectedMin: state.selectedMin - action.payload.MinimumPrice,
        selectedMax: state.selectedMax - action.payload.MaximumPrice,
        discountedSelectedMin: state.selectedMin + state.discount - action.payload.MinimumPrice,
        discountedSelectedMax: state.selectedMax + state.discount - action.payload.MaximumPrice
      };
    case CLEAR_PROCEDURES:
      return {
        ...state,
        procedures: state.procedures.map(procedure =>
          procedure.isSelected ? { ...procedure, isSelected: false } : procedure
        ),
        selectedProcedures: [],
        discount: 0,
        selectedMin: 0,
        selectedMax: 0
      };
    case APPLY_DISCOUNT:
      return {
        ...state,
        discountedSelectedMin: state.selectedMin - state.discount,
        discountedSelectedMax: state.selectedMax - state.discount
      }
    default:
      return {
        ...state
      };
  }
};

export default procedureReducer;
