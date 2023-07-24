import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
// import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Footer from "parts/Footer";
import { Fade } from "react-awesome-reveal";
import Testimony from "parts/Testimony";
import { connect } from "react-redux";

import { checkoutBooking } from "store/action/checkout";
import { fetchPage } from "store/action/page";
import Activities from "parts/Activities";

class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id]) {
      this.props
        .fetchPage(
          `detail-page/${this.props.match.params.id}`,
          this.props.match.params.id
        )
        .then((response) => {
          document.title = `Lifecation | ${response.title}`;
        });
    }
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;

    console.log(this.props);

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={page[match.params.id]} breadcrumb={breadcrumb} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-7 pr-5">
              <Fade up>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-12 col-lg-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
