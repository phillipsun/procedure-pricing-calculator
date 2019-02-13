import React, { Component } from "react";
import CategorySection from "./CategorySection";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProcedureList extends Component {
  

  render() {
    const { categories, procedures } = this.props;
    return (
      <div className="procedure-list">
        {// Create Category Sections
        categories.map(category => {
          return (
            <CategorySection key={category.CategoryId} category={category} />
          );
        })}
        {procedures.length === 0 && <p>Loading procedures...</p>}
      </div>
    );
  }
}

ProcedureList.propTypes = {
  procedures: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  procedures: state.procedureReducer.procedures,
  categories: state.procedureReducer.categories
});

export default connect(
  mapStateToProps,
  null
)(ProcedureList);
