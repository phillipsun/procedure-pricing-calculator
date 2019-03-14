import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  selectProcedure,
  deselectProcedure,
  applyDiscount
} from "../actions/procedureActions";

class Procedure extends Component {
  render() {
    const { procedure, deselectProcedure, selectProcedure, applyDiscount } = this.props;
    if (procedure.isSelected) {
      return (
        <div
          className={`procedure-list__procedure procedure procedure--${
            procedure.ProcedureId
          } procedure--selected`}
          onClick={() => {
            deselectProcedure(procedure);
            applyDiscount(procedure);
          }}
        >
          <h3 className="procedure__label"
          >{procedure.Label.replace(/\*/g, '')}</h3>
          <p className="procedure__price">
            <span className="procedure__min-price">
              ${procedure.MinimumPrice}
            </span>
            {" - "}
            <span className="procedure__max-price">
              ${procedure.MaximumPrice}
            </span>
          </p>
          <span className="procedure__deselect"></span>
        </div>
      );
    } else {
      return (
        <div
          className={`procedure-list__procedure procedure procedure--${
            procedure.ProcedureId
          }`}
          onClick={() => {
            selectProcedure(procedure);
            applyDiscount(procedure);
          }}
        >
          <h3 className="procedure__label">{procedure.Label.replace(/\*/g, '')}</h3>
          <p className="procedure__price">
            <span className="procedure__min-price">
              ${procedure.MinimumPrice}
            </span>
            {" - "}
            <span className="procedure__max-price">
              ${procedure.MaximumPrice}
            </span>
          </p>
        </div>
      );
    }
  }
}

Procedure.propTypes = {
  procedure: PropTypes.object.isRequired,
  selectProcedure: PropTypes.func.isRequired,
  deselectProcedure: PropTypes.func.isRequired,
  applyDiscount: PropTypes.func.isRequired
};

export default connect(
  null,
  { selectProcedure, deselectProcedure, applyDiscount }
)(Procedure);
