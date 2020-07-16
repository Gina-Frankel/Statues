import React, { Component } from "react";
import "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const { name, details } = this.props.statue;

    return (
      <div className="col-lg-9 col-md-12">
        <div className="row mt-2">
          <h2 className="mb-4">{name}</h2>
          <div className="col-sm-5">
            <img src="../../default.png" alt="default" />
          </div>
          <div className="col-sm-12 col-md-7 container">
            <div>{details}</div>
          </div>
        </div>
      </div>
    );
  }
}
