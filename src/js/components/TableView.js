import React, { Component } from "react";
import { connect } from "react-redux";
// import Table from "../components/Table";
import { sortBy, fetchData } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
  }
 
  componentDidMount() {
    this.props.fetchData();
    
  }

  sortBy(key) {
    this.props.sortBy(key);
  }

  render() {
    const arrowIcon = <FontAwesomeIcon icon={faSortDown} />;
    const data = this.props.data.sales ? (
      this.props.data.sales.map(row => {
        return (
          <tr>
            <td>{row.weekEnding.toLocaleString()}</td>
            <td>{"$" + row.retailSales.toLocaleString()}</td>
            <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
            <td>{row.unitsSold.toLocaleString()}</td>
            <td>{"$" + row.retailerMargin.toLocaleString()}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td> No Sales Data</td>
      </tr>
    );


    return (
      <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => this.sortBy("weekEnding")}>
              <div>
                WEEK ENDING
                <span className="arrowIcon"> {arrowIcon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => this.sortBy("retailSales")}>
              <div>
                RETAIL SALES <span className="arrowIcon">{arrowIcon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => this.sortBy("wholesaleSales")}>
              <div>
                WHOLESALE SALES <span className="arrowIcon">{arrowIcon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => this.sortBy("unitsSold")}>
              <div>
                UNITS SOLD <span className="arrowIcon">{arrowIcon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => this.sortBy("retailerMargin")}>
              <div>
                RETAILER MARGIN <span className="arrowIcon">{arrowIcon}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
    )

   


  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: function(key) {
      dispatch(sortBy(key));
    },
    fetchData: function() {
      dispatch(fetchData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);

