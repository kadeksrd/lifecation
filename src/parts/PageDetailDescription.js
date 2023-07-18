import React from "react";
import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 style={{ marginTop: 50, marginBottom: 20 }}>About The Place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Tidak Ada Feature"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20, marginTop: 10 }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                    style={{ width: "50px", height: "50px" }}
                  />
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
