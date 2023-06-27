import React from "react";
import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 style={{ marginTop: 50, marginBottom: 20 }}>About The Place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 30 }}>
              <img src={feature.imageUrl} alt={feature.name} />
              <br />
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
