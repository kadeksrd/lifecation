import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero.js";
// import landingPage from "json/landingPage.json";
import MostPicked from "parts/MostPicked";
import Category from "parts/Category";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { fetchPage } from "store/action/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Lifecation | Home";
    window.scrollTo(0, 0);
    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        "landingPage"
      );
  }

  render() {
    const { page } = this.props;
    console.log(page);

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Category data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
