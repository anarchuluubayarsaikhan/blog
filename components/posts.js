import Image from "next/image";
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import "@/components/dayjs-mn"
import Link from "next/link";
dayjs.extend(relativeTime);


export function Posts() {
    const [articles, setArtricles] = useState([])
    const [pages, setPages] = useState(1)
    const [ended, setEnded] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=ben&per_page=9`).then((response) => {
            return response.json()}).then((data) => {setArtricles(data)});
    }, []);

    function loadMore() {
        setLoading(true)
            fetch(`https://dev.to/api/articles?username=ben&page=${pages+1}&per_page=9`).then((response) => {
                return response.json()}).then((newdata) => {setArtricles(a => [...a, ...newdata])
                    setPages(pages+1)
                    if (newdata.length<6) {
                        setEnded(true)
                    }setLoading(false)
                });
                
            
    }

    return (
        <div className="text-center">
            <div className="grid xl:grid-cols-3 xl:gap-5 grid-cols-1 px-8 w-full xl:m-auto xl:max-w-screen-xl">
            {articles.map((article) => (
                <div key={article.id} className="card border border-border-card-color rounded-xl p-4 gap-4">
                    <Image src={article.social_image} width={360} height={240} className="w-full rounded-md aspect-video object-cover bg-slate-600" alt="Image"/>
                    <Link href={article.path}  className="card-body">
                        <div className="badge text-badge-text  bg-slate-50 py-2 px-3 rounded-md">{article.title}</div>
                        <div className="text-desc-color text-2xl font-semibold">{article.description}</div>
                        <div>{dayjs(article.published_at).locale('mn').fromNow()}</div>
                    </Link>
                </div>
                ))}
            </div>
            {!ended && (
                <button disabled={loading}  className="btn border border-button-bg rounded-md py-3 px-5 text-button-bg text-base font-medium " onClick={loadMore}>
                    {loading && (
                        <span class="loading loading-spinner loading-xs"></span>
                    )}
                    Load more</button>
            )}
                

        </div>
    )
  }