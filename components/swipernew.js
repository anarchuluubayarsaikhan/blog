// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination }  from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Swipernew(){
    const [news, setNews] = useState([])
    useEffect(()=> {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
        .then((response) => {return response.json()})
        .then((data) => {setNews(data)});},
        [])

    return(
    <Swiper>
    {news.map((start, slideIndex) => (
        <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 gap-3 pb-10">
                    <Image src={start.social_image} width={6000} height={400} slideIndex={slideIndex + start} />
            </div>
        </SwiperSlide>
    ))}
    </Swiper>
)
}