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
    <div className="w-full xl:max-w-screen-xl xl:-m-auto">
        <div className="m-auto">{news.map((item, index) => (
               <div>
                     <div key={item.id}>
                        <Image src={item.social_image} width={600} height={400} alt="Image" className={`${index=== indexnumber? "block":"hidden"}`}/>
                    </div>
               </div>
            ))}
            <div className="flex gap-2">
                        <IoIosArrowDropleftCircle onClick={()=> {
                            setIndexnumber(indexnumber-1)
                            if(indexnumber === 0) {
                                setIndexnumber (news.length)
                            }
                        }} className="w-20 h-20" />
                        <IoIosArrowDroprightCircle onClick={()=> {
                            setIndexnumber(indexnumber+1)
                            if(indexnumber === news.length) {
                                setIndexnumber (0)
                            }
                        }} className="w-20 h-20"/>
            </div>
        </div>
    </div>
)
}