import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default class SliderCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <Slider {...settings}>
          <div style={{ position: "relative" }}>
            <Image
              src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
