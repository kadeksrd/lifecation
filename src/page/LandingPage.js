import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero.js";
import landingPage from "json/landingPage.json";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Lifecation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Category data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
