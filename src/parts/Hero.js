import Button from "element/Button";
import React from "react";
import ImageHero from "assets/images/Image-hero.png";
import ImageFrame from "assets/images/frame_hero.png";
import IconTraveller from "assets/images/icon/icon-traveler.svg";
import IconCities from "assets/images/icon/icon-cities.svg";
import IconTreasure from "assets/images/icon/icon-treasure.svg";
import numberFormat from "utils/FormatNumber.js";
import { Fade } from "react-awesome-reveal";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container">
        <div className="row">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget you work, <br />
              start your vacation
            </h1>
            <p
              className="mb-5 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}>
              We Provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn btn-border-radius py-2 px-5 btn-shadow button-hero"
              hasShadow
              isPrimary
              onClick={showMostPicked}>
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconTraveller}
                  alt={`${props.data.travelers} travellers`}
                  width="32"
                  height="32"
                />
                <h6 className="mt-3 icon-font">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travellers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconCities}
                  alt={`${props.data.cities} cities`}
                  width="32"
                  height="32"
                />
                <h6 className="mt-3 icon-font">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  src={IconTreasure}
                  alt={`${props.data.treasure} treasures`}
                  width="32"
                  height="32"
                />
                <h6 className="mt-3 icon-font">
                  {numberFormat(props.data.treasure)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5 pt-3">
            <div style={{ width: 565, height: 404 }}>
              <img
                src={ImageHero}
                alt="Home Sweet Home"
                className="img-fluid position-absolute"
                style={{ margin: "-20px 0  0 -38px", zIndex: 1 }}
                width="527.48px"
                height="363.42px;"
              />
              <img
                src={ImageFrame}
                alt="Home Sweet Home"
                className="img-fluid position-absolute"
                style={{ marginTop: "10px" }}
                width="520px"
                height="349px"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
