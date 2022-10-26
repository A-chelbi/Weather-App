import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { WeatherCrad } from '../shared/WeatherCrad/WeatherCrad';

interface CarouselProps {
  data: any;
  city?: string;
}
export const Carousel = ({ data, city }: CarouselProps) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data?.map((slideContent: any, i: any) => (
          <SwiperSlide key={i} virtualIndex={i}>
            <WeatherCrad city={city} temp={slideContent.main.temp} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
