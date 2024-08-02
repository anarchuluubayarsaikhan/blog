import { Inder } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export function Slider() {
const [news, setNews] = useState([])
const [indexnumber, setIndexnumber] = useState(0)

useEffect(()=> {
    fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
    .then((response) => {return response.json()})
    .then((data) => {setNews(data)});},
    [])
return (
    <div className="xl:max-w-screen-xl m-auto">
        <div className="carousel rounded-box carousel-center xl:max-w-screen-xl m-auto relative]" >{news.map((item, index) => (
                     <div key={item.id} className="carousel-item overflow-hidden">
                        <Image src={item.social_image} width={6000} height={400} alt="Image" className={`${indexnumber=== index? "block": "hidden"} xl:w-full`}/>
                    </div>
            ))}
        </div>
        <div className="flex gap-2">
                        <IoIosArrowDropleftCircle onClick={()=> {
                           
                            if(indexnumber === 0) {
                                setIndexnumber (news.length-1)
                            }
                            else {
                                setIndexnumber(indexnumber-1)
                            }
                        }} className="w-20 h-20" />
                        <IoIosArrowDroprightCircle  onClick={()=> {
            
                            if(indexnumber === news.length-1) {
                                setIndexnumber (0)
                            }
                            else {
                                setIndexnumber(indexnumber+1)
                            }
                        }} className="w-20 h-20"/>
            </div>
    </div>
)
}