import React from "react";
import {
  CCarouselItem,
  CCarousel,
  CCarouselInner,
  CCarouselCaption,
  CCarouselIndicators,
  CCarouselControl,
} from "@coreui/react";

const CoreCarousel = () => {
  const slides = [
    "http://kclui.com/IVEST/ITP4208/images/BS4Carousel/carousel-1.jpg",
    "http://kclui.com/IVEST/ITP4208/images/BS4Carousel/carousel-2.jpg",
    "http://kclui.com/IVEST/ITP4208/images/BS4Carousel/carousel-3.jpg",
  ];

  return (
    <div>
      <CCarousel className="h-50" animate autoSlide={3000}>
        <CCarouselIndicators />
        <CCarouselInner>
          <CCarouselItem>
            <img
              className="d-block"
              style={{ width: "100vw", height: "80vh" }}
              src={slides[0]}
              alt="slide 1"
            />
            <CCarouselCaption>
              <h3>Slide 1</h3>
              <p>Slide 1</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <img
              className="d-block"
              style={{ width: "100vw", height: "80vh" }}
              src={slides[1]}
              alt="slide 2"
            />
            <CCarouselCaption>
              <h3>Slide 2</h3>
              <p>Slide 2</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <img
              className="d-block"
              style={{ width: "100vw", height: "80vh" }}
              src={slides[2]}
              alt="slide 3"
            />
            <CCarouselCaption>
              <h3>Slide 3</h3>
              <p>Slide 3</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" />
        <CCarouselControl direction="next" />
      </CCarousel>
    </div>
  );
};

export default CoreCarousel;
