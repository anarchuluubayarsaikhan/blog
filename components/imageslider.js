import Image from "next/image";
import { useEffect, useState } from "react";

export function Imageslider() {
    const [news, setNews] = useState([])
    useEffect(()=> {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
        .then((response) => {return response.json()})
        .then((data) => {setNews(data)});},
        [])
    return(
            <div className="carousel w-full xl:max-w-xl aspect-video">{news.map((item, index) => (
                <div id={`slide${index}`} className="carousel-item relative w-full aspect-video" key={item.id}>
                    <Image src={item.social_image} width={600} height={400} alt="Image" className="w-full aspect-video"/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${index==0? index=news.length-1 :index-1
                        }`} className="btn btn-circle" >❮</a>
                        <a href={`#slide${index===news.length-1? index=1 :index+1}`} className="btn btn-circle">❯</a>
                    </div>
                </div>             
                ))          
                }
            </div>
            
            
    )
}