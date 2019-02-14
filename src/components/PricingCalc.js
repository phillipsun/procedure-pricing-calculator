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
        <React.Fragment>
          <div className="pricing-calc">
            <h3 className="pricing-calc__new-total">
              <span>Total: $0</span>
            </h3>
          </div>
          <div className="pricing-calc__wrapper">
            <h4 className="pricing-calc__text">Select Desired Procedures:</h4>
          </div>
        </React.Fragment>
      );
    } else if (selectedProcedures.length === 1) {
      return (
        <React.Fragment>
          <div className="pricing-calc">
            <h3 className="pricing-calc__new-total">
              <span>Total: $</span>
              <AnimatedNumber
                value={selectedMin}
                style={{
                  transition: "0.8s ease-out",
                  transitionProperty: "background-color, color, opacity"
                }}
                stepPrecision={0}
                duration={700}
              />
              <span> - $</span>
              <AnimatedNumber
                value={selectedMax}
                style={{
                  transition: "0.8s ease-out",
                  transitionProperty: "background-color, color, opacity"
                }}
                stepPrecision={0}
                duration={700}
              />
            </h3>
            <div className="pricing-calc__wrapper">
              <div
                className="pricing-calc__clear"
                onClick={() => {
                  clearProcedures();
                }}
                >
                  Clear Selections
              </div>
              <h4 className="pricing-calc__text">1 Procedure Selected</h4>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="pricing-calc">
            <div className="pricing-calc__total-wrapper">
              <h3 className="pricing-calc__new-total">
                <span>Now: $</span>
                <AnimatedNumber
                  value={discountedSelectedMin}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity"
                  }}
                  stepPrecision={0}
                  duration={700}
                />
                <span> - $</span>
                <AnimatedNumber
                  value={discountedSelectedMax}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity"
                  }}
                  stepPrecision={0}
                  duration={700}
                />
              </h3>
              <h3 className="pricing-calc__old-total">
                <span>Was: $</span>
                <AnimatedNumber
                  value={selectedMin}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity"
                  }}
                  stepPrecision={0}
                  duration={700}
                />
                <span> - $</span>
                <AnimatedNumber
                  value={selectedMax}
                  style={{
                    transition: "0.8s ease-out",
                    transitionProperty: "background-color, color, opacity"
                  }}
                  stepPrecision={0}
                  duration={700}
                />
              </h3>
            </div>
            <h3 className="pricing-calc__discount animateAll">
              <span>Save: $</span>
              <AnimatedNumber
                value={discount}
                style={{
                  transition: "0.8s ease-out",
                  transitionProperty: "background-color, color, opacity"
                }}
                stepPrecision={0}
                duration={1000}
              />
            </h3>
            <div className="pricing-calc__wrapper">
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
        </React.Fragment>
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
