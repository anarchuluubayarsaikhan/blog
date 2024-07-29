import Image from "next/image";
import { useEffect, useState } from "react"

export function Posts() {
    const [articles, setArtricles] = useState([])
    const [pages, setPages] = useState(0)
    useEffect(() => {
        loadMore()
    }, []);

    function loadMore() {
            fetch(`https://dev.to/api/articles?username=ben&page=${pages}&per_page=9`).then((response) => {
                return response.json()}).then((newdata) => {setArtricles(a => [...a, ...newdata])});
                setPages(pages+1)
            
    }

    return (
        <div className="text-center">
            <div className="grid xl:grid-cols-3 xl:gap-5 grid-cols-1 px-8 w-full xl:m-auto xl:max-w-screen-xl">
            {articles.map((article) => (
                <div key={article.id} className="card border border-border-card-color rounded-xl p-4 gap-4">
                    <Image src={article.social_image} width={360} height={240} className="w-full rounded-md aspect-video"/>
                    <div className="card-body">
                        <div className="badge text-badge-text  bg-slate-50 py-2 px-3 rounded-md">{article.title}</div>
                        <div className="text-desc-color text-2xl font-semibold">{article.description}</div>
                        </div>
                    </div>
                ))}
            </div>
                <button className="btn border border-button-bg rounded-md py-3 px-5 text-button-bg text-base font-medium " onClick={loadMore}>Load more</button>

        </div>
    )
  }