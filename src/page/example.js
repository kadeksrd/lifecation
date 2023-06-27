import React, { Component } from "react";

import Breadcrumb from "element/Breadcrumb";
import Number from "element/Form/InputNumber";
import Date from "element/Form/InputDate";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Breadcrumb data={this.breadcrumbList} />

        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}>
          <div className="col-auto">
            <Number min={0} max={30} />
            <Date
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
