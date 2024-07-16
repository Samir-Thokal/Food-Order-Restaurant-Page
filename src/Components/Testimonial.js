import React from "react";
import ProfilePic from "../Assets/face-image-samir.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Best food delivery service ever! The meals are always hot, fresh, and delicious. 
        Easy ordering and excellent customer service make it my go-to choice for fast and tasty food.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" style={{ width: '100px', height: '100px' }} />
        <p>
        Best food delivery service ever! The meals are always hot, fresh, and delicious. 
        Easy ordering and excellent customer service make it my go-to choice for fast and tasty food.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Samir Thokal</h2>
      </div>
    </div>
  );
};

export default Testimonial;
