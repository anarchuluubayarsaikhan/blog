import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Trendings() {
    const [trendings, setTrending] = useState([])
    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
            .then((response) => { return response.json() })
            .then((data) => { setTrending(data) });
    },
        [])
    return (
       <div className="m-auto xl:max-w-screen-xl md:max-w-screen-xl flex flex-col gap-7 pt-[30px] font-sans xl:pt-[100px]">
            <p className="text-title-color font-bold text-2xl">Trending</p>
            <div className="w-full max-h-[320px] rounded-xl flex flex-col md:flex-row md:gap-5 xl:max-w-screen-xl md:max-w-screen-xl overflow-scroll">
                {trendings.map((trending) => (
                    <Link href={trending.path} className="relative h-full">
                    <Image src={trending.social_image} alt="Image of an article" className="aspect-video w-full h-full md:min-w-[293px] md:min-h-[320px]" width={293} height={320}/>
                    <div className="flex flex-col gap-4 xl:max-h-[76px] absolute bottom-7 left-7">
                        <div className="badge badge-primary p-3">{trending.tag_list[0]}</div>
                        <p className="text-white text-lg font-semibold">{trending.description}</p>
                    </div>
                  
                </Link> 
                    ))}
            </div>
       </div>
    )
}