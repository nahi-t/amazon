import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import classes from "./myCarousel.module.css";

export default function MyCarousel() {  
  return (
    <div className={classes.carouselWrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className={classes.customCarousel}
      >
        {img.map((imgItem, index) => (
          <div key={index} className={classes.slide}>
            <img 
              src={imgItem} 
              alt={`Slide ${index + 1}`}
              className={classes.carouselImage}
            />
          </div>
        ))}
      </Carousel>
      <div className={classes.heroOverlay}></div>
    </div>
  );
}