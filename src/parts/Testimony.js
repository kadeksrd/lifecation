import React from "react";
import Star from "element/Star";
import TestimonyAccent from "../assets/images/testimonial-frame.png";
import Button from "element/Button";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div
            className="testimonial-hero"
            style={{
              margin: `30px 0 0 30px`,
            }}>
            <img
              src={data.imageUrl}
              alt="testimbnial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt="testimonial frame"
              className="position-absolute"
              style={{ margin: `50px 0 0 -36px` }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div className="">
            <Button
              className="btn px-5 py-2 btn-testimony"
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
              style={{ marginTop: 40 }}>
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
