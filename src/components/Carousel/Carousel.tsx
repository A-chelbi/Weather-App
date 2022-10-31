import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { WeatherCrad } from '../shared/WeatherCrad/WeatherCrad';
import { useAppSelector } from '../../utils/useAppSelector';

interface CarouselProps {
  city?: string;
  unitData?: string;
}
export const Carousel = ({ city, unitData }: CarouselProps) => {
  const [weatherData, setData] = useState(null);
  const data = useAppSelector((state) => state.weather.weatherData);

  // Todo: update data when unitData is changed
  //   useEffect(() => {

  // }, [])

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
        {data?.map((slideContent: any, i: any) => {
          // Todo: filter data by day
          // const dt = new Date(slideContent.dt_txt);
          // const day = dt.getDate();
          // const month = dt.getMonth();

          return (
            <SwiperSlide key={i} virtualIndex={i}>
              <WeatherCrad
                city={city}
                temp={slideContent.main.temp}
                date={slideContent.dt_txt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
