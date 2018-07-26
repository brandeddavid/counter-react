import React, { Component } from "react";
import "../static/css/counter.css"

class Counter extends Component {
  

  render() {
    return (
        <div>
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
            <span id="incrementButton">
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-dark btn-sm">+</button>
            </span>
            <span id="decrementButton">
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-info btn-sm m-2">-</button>
            </span>
            <span id="deleteButton">
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">X</button>
            </span>                
            {/* {this.renderTags()} */}
        </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning": "primary";
    return classes;
  }

  formatCount = () => {
      const { value } = this.props.counter;
      return value === 0 ? "Zero": value;
  }

}

export default Counter;
