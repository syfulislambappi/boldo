import React, { useCallback, useRef } from "react";
import { Container } from "../../globalStyles";
import "swiper/css";
import "swiper/css/bundle";
import {
  ReviewSection,
  ReviewContainer,
  Heading,
  ReviewButtons,
  NextButton,
  PrevButton,
  CardContainer,
} from "./styles";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import slideData from "../../data/slideData";
import Card from "../Card/Card";

const Reviews = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <ReviewSection>
      <Container>
        <ReviewContainer>
          <Heading>
            An enterprise template to ramp up your company website
          </Heading>
          <ReviewButtons>
            <PrevButton onClick={handlePrev}>
              <BsArrowLeftShort />
            </PrevButton>
            <NextButton onClick={handleNext}>
              <BsArrowRightShort />
            </NextButton>
          </ReviewButtons>
        </ReviewContainer>
        <CardContainer>
          <Swiper
            ref={sliderRef}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {slideData.map(({ id, content, name, title, img }) => (
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
                key={id}
              >
                <Card content={content} name={name} title={title} img={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContainer>
      </Container>
    </ReviewSection>
  );
};

export default Reviews;
