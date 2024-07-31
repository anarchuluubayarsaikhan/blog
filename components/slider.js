import { Inder } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export function Slider() {
const [news, setNews] = useState([])
const [indx, setIndx] = useState([])

function slideLeft(item, index){
   news[index-1].social_image.style.display = "block"
   news[index].social_image.style.display = "hidden"
}

function slideRight(social_image, index){
    news[index +1].social_image.style.display  = "block"
    news[index].social_image.style.display  = "hidden"
}

useEffect(()=> {
    fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
    .then((response) => {return response.json()})
    .then((data) => {setNews(data)});},
    [])
return (
    <div>
        <div>{news.map((item, index) => (
               <div>
                     <div key={item.id}>
                        <Image src={item.social_image} width={600} height={400} alt="Image" className={`${index==0? "block":"hidden"}`}/>
                    </div>
                    <div className="flex gap-2">
                        <IoIosArrowDropleftCircle onClick={slideLeft(social_image,index)} className="w-20 h-20" />
                        <IoIosArrowDroprightCircle onClick={slideRight(social_image,index)} className="w-20 h-20"/>
                    </div>
               </div>
            ))}
        </div>
    </div>
)
}