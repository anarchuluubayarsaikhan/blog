import { Swiper } from 'swiper/react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/swiper-bundle.min.css';


export function Swiper () {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "vertical",
        loop: true,
      
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
      
      

    return (
        <div class="swiper">
            <div class="swiper-wrapper">
                {news.map((item, index) => (
                    <div class="swiper-slide" key={item.id}>
                    
                        <Image src={item.social_image} width={600} height={400} alt="Image" className="w-full aspect-video"/>
                    </div>))}
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

    )
    }