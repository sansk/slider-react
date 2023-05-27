import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { list } from "./data";

export const CarouselSlider = () => {
  const [people, setPeople] = useState(list);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person) => {
          const { id, name, image, title, quote } = person;
          return (
            <article key={id} className="slick-slide">
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
