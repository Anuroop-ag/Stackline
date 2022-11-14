import React, { Component } from "react";
import "./css/App.css";
import ProductView from "./js/components/ProductView";
import TableView from "./js/components/TableView";
import ChartView from "./js/components/ChartView";
import Header from "./js/components/Header";

class App extends Component {
  render() {
    return (
      <div className="grid-view">
        <div className="product-view">
          <ProductView />
        </div>
        <div className="chart-view">
          <ChartView />
        </div>
        <div className="table-view">
          <TableView />
        </div>
        <div className="header-view">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
