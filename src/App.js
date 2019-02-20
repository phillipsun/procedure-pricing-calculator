import React, { Component } from "react";
import ProcedureList from "./components/ProcedureList";
import PricingCalc from "./components/PricingCalc";
import { connect } from "react-redux";
import { getProcedures } from "./actions/procedureActions";

class App extends Component {
  componentDidMount() {
    const { getProcedures } = this.props;
    getProcedures();
  }

  render() {
    return (
      <div className="container">
        <h1 className="headline app__headline">Select Multiple Procedures To See Your Discount</h1>
        <PricingCalc />
        <ProcedureList />
        <div className="panel">
          <div className="panel-body">
            <p>
              * Dr. Morales offers visitors to his site the opportunity to see
              estimated prices at his premier facility. These estimates are not
              quotes or guarantees. You should not rely upon those estimates as
              a full or final price. Your actual costs may be higher or lower
              depending on many factors, including but not limited to: your
              surgeon's treatment choices, actual services rendered, additional
              ancillary treatments or services, medications, and potential
              complications. An in-person consultation is required to receive a
              finalized quote of the procedure(s) you desire.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProcedures }
)(App);
