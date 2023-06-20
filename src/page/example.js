import React, { Component } from "react";
import InputDate from "element/Form/inputDate/index";
import InputNumber from "element/Form/inputNumber/index";
import Breadcrumb from "element/Breadcrumb";

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
            <InputNumber min={0} max={30} />
            <InputDate
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
