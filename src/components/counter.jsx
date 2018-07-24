import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["one", "two", "three"]
  };
  render() {
    return (
        <div>
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
            <button className="btn btn-primary btn-sm">Click Me</button>
            {this.renderTags()}
        </div>
    );
  }
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning": "primary";
    return classes;
  }
  formatCount = () => {
      const { count } = this.state;
      return count === 0 ? "Zero": count;
  }
  renderTags = () => {
      return this.state.tags.length === 0 ? <p>There are no tags</p>: <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }
}

export default Counter;
