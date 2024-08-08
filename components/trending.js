import Link from "next/link";
import { useEffect, useState } from "react";

export function Trending() {
    const [trendings, setTrending] = useState([])
    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9`)
            .then((response) => { return response.json() })
            .then((data) => { setTrending(data) });
    },
        [])
    return (
        <div className="flex flex-col gap-7 pt-[100px] font-sans xl:max-w-screen-xl m-auto">
             <p className="text-title-color font-bold text-2xl">Trending</p>
            <div className="flex flex-col gap-7  xl:max-w-screen-xl  m-auto overflow-scroll">
                <div className="flex gap-5 ">
                    {trendings.map((trending) => (
                        <Link href={trending.path}>
                            <div style={{ backgroundImage: `url(${trending.social_image})` }} className="max-w-[293px] max-h-[320px] rounded-xl pt-44 pb-7 pl-7 pr-8">
                                <div className="w-[230px] h-[120px] flex flex-col gap-4">
                                <div className='flex gap-2 flex-wrap'>
                                    {trending.tag_list.map((tag)=> 
                                    <div className="badge badge-primary p-3">{tag}</div>
                                    )}
                                </div>
                                    <p className="text-white text-lg font-semibold">{trending.title}</p>
                                </div>
                        </div>
                        </Link> 
                    ))}
                </div>
            </div>
        </div>
       


    )
}