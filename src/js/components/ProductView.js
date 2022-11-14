import React, { Component } from "react";
import { connect } from "react-redux";

class ProductView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.data.tags ? 
      (this.props.data.tags.map(row => {
        return <span className= "tags"> {row} </span>;
      })) : <span/> ;
    
    return (
      <div id="product">
        <figure>
          <img src={this.props.data.image} alt={this.props.data.alt} />
          <figcaption id="title">{this.props.data.title}</figcaption>
          <figcaption id="subtitle">{this.props.data.subtitle}</figcaption>
        </figure>
        <hr />
        <div id="spans">{tags}</div>
        <hr />
      </div>
    );
   
  }
}

function syncProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  syncProps,
  null
)(ProductView);
