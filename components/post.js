import Image from "next/image";
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import "@/components/dayjs-mn"
import Link from "next/link";
dayjs.extend(relativeTime);


export function Post() {
    const [articles, setArtricles] = useState([])
    const [pages, setPages] = useState(1)
    const [ended, setEnded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState("all")

    const tags = [
        {value:"all", name:"All"},
        {value:"jokes", name:"Jokes"},
        {value:"watercooler", name:"Watercooler"},
        {value:"discuss", name:"Discuss"},
    ]

    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9&tag=${selected==="all"? "" : selected} `).then((response) => {
            return response.json()}).then((data) => {setArtricles(data)});
    }, [selected]);

    function loadMore() {
        setLoading(true)
            fetch(`https://dev.to/api/articles?username=ben&page=${pages+1}&per_page=9&tag=${selected}`).then((response) => {
                return response.json()}).then((newdata) => {setArtricles(a => [...a, ...newdata])
                    setPages(p=>p+1)
                    if (newdata.length<9) {
                        setEnded(true)
                    }setLoading(false)
                });
                
            
    }

    return (
        <div className="flex flex-col xl:max-w-screen-xl m-auto py-[100px] gap-8 ">
            <h3 className="font-bold text-2xl text-title-color">All Blog Post</h3>
            <div className="flex gap-3">
                {tags.map((tag) => 
                    <div key={tag.value} className={`font-bold text-xs cursor-pointer ${selected === tag.value? "text-orange-500" : "text-selected"}`} onClick={() => setSelected(tag.value)}>{tag.name}</div>
                )}
            </div>
            <div className="text-center">
                <div className="grid xl:grid-cols-3 xl:gap-5 grid-cols-1  w-full xl:m-auto xl:max-w-screen-xl md:grid-cols-2">
                {articles.map((article) => (
                    <div key={article.id} className="card border border-border-card-color rounded-xl p-4 gap-4">
                        <Image src={article.social_image} width={360} height={240} className="w-full rounded-md aspect-video object-cover bg-slate-600" alt="Image"/>
                        <Link href={article.path}  className="card-body">
                            <div className="badge text-badge-text  bg-slate-50 py-2 px-3 rounded-md">{article.tags}</div>
                            <div className="text-desc-color text-2xl font-semibold">{article.description}</div>
                            <div>{dayjs(article.published_at).locale('mn').fromNow()}</div>
                        </Link>
                    </div>
                    ))}
                </div>
                {!ended && (
                    <button disabled={loading}  className="btn btn-outline border border-button-bg rounded-md mt-[100px] py-3 px-5 text-button-bg text-base font-medium" onClick={loadMore}>
                        {loading && (
                            <span class="loading loading-spinner loading-xs"></span>
                        )}
                        Load more
                    </button>
                )}
            </div>
        </div>
       
    )
  }