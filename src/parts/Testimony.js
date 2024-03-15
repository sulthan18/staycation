import Star from "elements/Star";
import React from "react";
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <section className="container d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6">
          <img
            src={data.imageUrl}
            alt="Testimonial"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}