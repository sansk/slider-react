import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { shortList, list, longList } from "./data";

export const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currPerson, setCurrPerson] = useState(0);

  const prevSlide = () => {
    if (currPerson === 0) {
      setCurrPerson(people.length - 1);
      return;
    }
    setCurrPerson(currPerson - 1);
  };

  const nextSlide = () => {
    if (currPerson === people.length - 1) {
      setCurrPerson(0);
      return;
    }
    setCurrPerson(currPerson + 1);
  };

  useEffect(() => {
    let intId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(intId);
    };
  }, [currPerson]);

  return (
    <section className="slider-container">
      {people.map((person, perIndex) => {
        const { id, name, image, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (perIndex - currPerson)}%)`,
            }}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
