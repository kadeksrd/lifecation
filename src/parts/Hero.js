import Button from "element/Button";
import React from "react";
// import ImageHero from "assets/images/image-hero.jpg";
// import ImageFrame from "assets/images/frame-hero.jpg";
// import IconTraveller from "assets/images/icon/icon-traveller.svg";
// import IconCity from "assets/images/icon/icon-city.svg";
// import IconTreasure from "assets/images/icon/icon-treasure.svg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo();
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget you work, <br />
            start your vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We Provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onclick={showMostPicked}
          >
            Show Me Now
          </Button>
        </div>
      </div>
    </section>
  );
}
