import React, { Component } from "react";

export class StatueList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const items = this.props.statue.map((item, key) => (
      <li key={item.statueName}>{item.statueName}</li>
    ));

    console.log(items);
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default StatueList;
