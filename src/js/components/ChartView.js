import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip, Legend,CartesianGrid, YAxis} from "recharts";

class ChartView extends Component {
  constructor(props) {
    super(props);  
  }
  render() {
    return (
      <div id="chart">
        <div className="chart-header">Retail Sales</div>
        <LineChart width={1100} height={400} data={this.props.data.sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="weekEnding"
          // minTickGap={15}
          />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="retailSales" strokeWidth={2} dot={false}  stroke="#40a8ef" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="retailerMargin" strokeWidth={2} dot={false}  stroke="#B2BEB5" />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ChartView);
