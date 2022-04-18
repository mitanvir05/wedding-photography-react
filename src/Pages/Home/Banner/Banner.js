import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/FnTVnc7/high-angle-shot-lens-headphones-gimbal-phone.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              Its no wonder that photography quotes are one of the most popular
              things to share on social media, usually by other photographers,
              of course.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NpwPRcz/professional-camera-blurred.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>
              If you force it and you keep looking for moments then you’ll end
              up shooting what you think the wedding should look like rather
              than actual moments that are unfolding in front of you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/gj07vv2/close-up-view-male-hand-holding-professional-camera-street.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Dont look at other wedding photographers work. When you walk into
              a room, find the one thing that you are attracted to and focus on
              that. Your instincts will guide you to finding an image that you
              love.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
