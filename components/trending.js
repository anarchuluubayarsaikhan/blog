import Image from "next/image";
import { useEffect, useState } from "react"

export function Trending() {
    const [articles, setArticles] = useState([]);
    useEffect(()=> {fetch ("https://dev.to/api/articles")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setArticles(data)
        })
    }, [])
    return (
        <div class="grid grid-cols-3 grid-rows-3">
            {articles.map((article) => (
                    <div className="card">
                        <Image src={article.social_image} height={240} width={360}/>
                         <div>
                            {article.title}
                        </div>
                        <div>
                            {article.description}
                        </div>
                    </div>
                ))}
        </div>
    )
  }