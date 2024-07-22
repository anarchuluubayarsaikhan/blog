import Image from "next/image";
import { useEffect, useState } from "react"

export function Posts() {
    const [articles, setArtricles] = useState([])
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=ben").then((response) => {
            return response.json()}).then((data) => {setArtricles(data)});
    }, []);
    return (
        <div className="grid grid-cols-3 gap-5">
            {articles.map((article) => (
                <div key={article.id} className="card">
                    <Image src={article.social_image} width={360} height={240}/>
                    <div className="card-body">
                        <div className="card-title">{article.title}</div>
                        <div>{article.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
  }