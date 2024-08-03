import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Swipersnew () {
  const [news, setNews] = useState([])
  useEffect(()=> {
    fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
    .then((response) => {return response.json()})
    .then((data) => {setNews(data)});},
    [])

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {news.map((item, index) => (
      <SwiperSlide key={item.id} >
            <Image src={item.social_image} width={6000} height={400} alt="Image"/>
      </SwiperSlide>
      ))}
    </Swiper>
  );
};