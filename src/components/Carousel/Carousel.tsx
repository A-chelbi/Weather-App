import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { WeatherCrad } from '../shared/WeatherCrad/WeatherCrad';
import { useAppSelector } from '../../utils/useAppSelector';
import { Box } from '@mui/material';

interface CarouselProps {
  city?: string;
  unitData?: string;
}
export const Carousel = ({ city, unitData }: CarouselProps) => {
  const data = useAppSelector((state) => state.weather.weatherData);

  return (
    <>
      <Box
        component="div"
        sx={{
          maxWidth: 1000,
        }}
      >
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            '0': {
              slidesPerView: 1.3,
            },
            '330': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 2,
            },
            '1024': {
              slidesPerView: 3,
            },
          }}
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
                  unitData={unitData}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};
