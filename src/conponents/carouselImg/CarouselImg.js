import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselImg() {
  return (
    <section className="mx-3">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83b50bc7a3004f3a.jpg?q=20"
            alt="Nothing Phone 1"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
            alt="Flight booking"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20"
            alt="Flight booking 2"
          />
        </div>
      </Carousel>
    </section>
  );
}
