import Button from "element/Button";
import React from "react";

function MostPicked(props) {
  return (
    <section
      className="container"
      ref={props.refMostPicked}
      style={{ paddingBottom: 5 }}>
      <h3 className="text-center mb-5" style={{ fontWeight: 600 }}>
        Most Picked
      </h3>
      <div className="container-grid mt-4 mb-5">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostPicked-${index}`}
              className={`item column-4 ${
                index === 0 ? "row-2 main-img" : "row-1"
              }`}>
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}{" "}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="streched-link d-block text-white"
                    href={`/propeties/${item._id}`}>
                    {item.name}
                  </Button>
                  <span>
                    {item.city},{item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
