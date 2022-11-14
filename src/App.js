import React, { Component } from "react";
import "./css/App.css";
import ProductContainer from "./js/components/ProductView";
import TableContainer from "./js/components/TableView";
import ChartContainer from "./js/components/ChartView";
import Header from "./js/components/Header";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="product-container">
          <ProductContainer />
        </div>
        <div className="chart-container">
          <ChartContainer />
        </div>
        <div className="table-container">
          <TableContainer />
        </div>
        <div className="header-container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
