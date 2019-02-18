import React, { Component } from "react";
import Procedure from "./Procedure";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CategorySection extends Component {
  render() {
    const { category, procedures } = this.props;
    return (
      <div className="procedure-list__category">
        <h2 className="procedure-list__category-header">
          {category.Label}
        </h2>
        <div className="procedure-list__category-procedures">
          {procedures &&
            procedures.map(procedure => {
              // Change to pass in procedure.isSelected as a prop then change Procedure component
              return procedure.CategoryId === category.CategoryId ? (
                <Procedure key={procedure.ProcedureId} procedure={procedure} />
              ) : null;
            })}
        </div>
      </div>
    );
  }
}

CategorySection.propTypes = {
  procedures: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  procedures: state.procedureReducer.procedures
});

export default connect(
  mapStateToProps,
  null
)(CategorySection);
