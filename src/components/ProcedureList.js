import React, { Component } from "react";
import CategorySection from "./CategorySection";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProcedureList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="procedure-list">
        {
          categories.map(category => {
            return (
              <CategorySection key={category.CategoryId} category={category} />
            );
        })}
      </div>
    );
  }
}

ProcedureList.propTypes = {
  categories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categories: state.procedureReducer.categories
});

export default connect(
  mapStateToProps,
  null
)(ProcedureList);
