import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';
import dayjs from "dayjs";
import "@/components/dayjs-mn"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Swipersnew() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
      .then((response) => { return response.json() })
      .then((data) => { setNews(data) });
  },
    [])
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
  };
  return (
    <Swiper
      modules={[A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}

    >
      {news.map((item, index) => (
        <SwiperSlide key={item.id} >
          <Image src={item.social_image} width={6000} height={400} alt="Image" />
          <div className='w-1/2 h-2/5 aspect-video bg-white border-border-card-color border p-10 rounded-xl absolute left-[11px] bottom-[13px] flex flex-col gap-4 overflow-hidden'>
            <div className='flex flex-col gap-2'>
              <div className="badge badge-primary">{item.tags}</div>
              <p className='text-title-color font-semibold text-4xl'>{item.title}</p>
            </div>
            <div >{dayjs(item.published_at).locale(`mn`).fromNow()}</div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperButtonPrev><IoIosArrowDropleft size={32} /></SwiperButtonPrev>
      <SwiperButtonNext><IoIosArrowDropright size={32} /></SwiperButtonNext>
    </Swiper>
  );
};