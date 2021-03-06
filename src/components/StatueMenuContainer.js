import React, { Component } from "react";
import { StatueMenu } from "./StatueMenu";
import style from "./StatueMenuContainer.module.css";

export class StatueMenuContainer extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-12">
        <div className={style.container}>
          <h2 className="pt-3">Statues</h2>
          <StatueMenu />
        </div>
      </div>
    );
  }
}
