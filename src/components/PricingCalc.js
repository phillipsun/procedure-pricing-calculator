import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  deselectProcedure,
  clearProcedures
} from "../actions/procedureActions";
import AnimatedNumber from "react-animated-number";

class PricingCalc extends Component {
  render() {
    const {
      selectedProcedures,
      selectedMin,
      selectedMax,
      clearProcedures,
      discountedSelectedMin,
      discountedSelectedMax,
      discount
    } = this.props;
    if (selectedProcedures.length === 0) {
      return (
        <div className="pricing-calc">
          <div className="pricing-calc__amounts">
            <h3 className="pricing-calc__discount">
              <span>Save: $</span>
              <AnimatedNumber
                className="pricing-calc__animated-number"
                value={discount}
                stepPrecision={0}
                duration={1000}
              />
            </h3>
            <div className="pricing-calc__total-wrapper">
              <h3 className="pricing-calc__new-total no-procedures-selected">
                <span>Total: $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMin}
                  stepPrecision={0}
                  duration={1000}
                />
              </h3>
            </div>
          </div>
          <div className="pricing-calc__selection-wrapper">
            <h4 className="pricing-calc__text none-selected">Select Desired Procedures:</h4>
          </div>
        </div>
      );
    } else if (selectedProcedures.length === 1) {
      return (
        <div className="pricing-calc">
          <div className="pricing-calc__amounts">
            <h3 className="pricing-calc__discount">
              <span>Save: $</span>
              <AnimatedNumber
                className="pricing-calc__animated-number"
                value={discount}
                stepPrecision={0}
                duration={1000}
              />
            </h3>
            <div className="pricing-calc__total-wrapper">
              <h3 className="pricing-calc__new-total">
                <span>Total: $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMin}
                  stepPrecision={0}
                  duration={1000}
                />
                <span> - $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMax}
                  stepPrecision={0}
                  duration={1000}
                />
              </h3>
              <h3 className="pricing-calc__old-total">
                <span>Was: $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMin}
                  stepPrecision={0}
                  duration={1000}
                />
                <span> - $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMax}
                  stepPrecision={0}
                  duration={1000}
                />
              </h3>
            </div>
          </div>
          <div className="pricing-calc__selection-wrapper">
            <div
              className="pricing-calc__clear"
              onClick={() => {
                clearProcedures();
              }}
              >
                Clear Selections
            </div>
            <h4 className="pricing-calc__text">{selectedProcedures.length} Procedure Selected</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pricing-calc">
          <div className="pricing-calc__amounts">
            <h3 className="pricing-calc__discount">
              <span>Save: $</span>
              <AnimatedNumber
                className="pricing-calc__animated-number"
                value={discount}
                stepPrecision={0}
                duration={1000}
              />
            </h3>
            <div className="pricing-calc__total-wrapper">
              <h3 className="pricing-calc__new-total">
                <span>Now: $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={discountedSelectedMin}
                  stepPrecision={0}
                  duration={1000}
                />
                <span> - $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={discountedSelectedMax}
                  stepPrecision={0}
                  duration={1000}
                />
              </h3>
              <h3 className="pricing-calc__old-total">
                <span>Was: $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMin}
                  stepPrecision={0}
                  duration={1000}
                />
                <span> - $</span>
                <AnimatedNumber
                  className="pricing-calc__animated-number"
                  value={selectedMax}
                  stepPrecision={0}
                  duration={1000}
                />
              </h3>
            </div>
          </div>
          <div className="pricing-calc__selection-wrapper">
            <div
              className="pricing-calc__clear"
              onClick={() => {
                clearProcedures();
              }}
            >
              Clear Selections
            </div>
            <h4 className="pricing-calc__text">{selectedProcedures.length} procedures selected</h4>
          </div>            
        </div>
      );
    }
  }
}

PricingCalc.propTypes = {
  selectedProcedures: PropTypes.array.isRequired,
  selectedMin: PropTypes.number.isRequired,
  selectedMax: PropTypes.number.isRequired,
  discountedSelectedMin: PropTypes.number.isRequired,
  discountedSelectedMax: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  selectedProcedures: state.procedureReducer.selectedProcedures,
  selectedMin: state.procedureReducer.selectedMin,
  selectedMax: state.procedureReducer.selectedMax,
  discountedSelectedMin: state.procedureReducer.discountedSelectedMin,
  discountedSelectedMax: state.procedureReducer.discountedSelectedMax,
  discount: state.procedureReducer.discount
});

export default connect(
  mapStateToProps,
  { deselectProcedure, clearProcedures }
)(PricingCalc);
