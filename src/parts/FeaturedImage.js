import React from "react";
import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container mt-3">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              } ${(index = 2 ? "mt-4" : "")}
              }`}>
              <Fade bottom delay={300 * index}>
                <div className="card h-245">
                  <figure className="img-wrapper">
                    <img className="img-cover" src={item.url} alt={item._id} />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
