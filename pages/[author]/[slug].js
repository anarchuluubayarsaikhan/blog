import { useEffect, useState } from "react"
import parse from 'html-react-parser'

export default function Slug() {
    const [article, setArticle] = useState([])
    useEffect(() => {
        fetch("https://dev.to/api/articles/bytesized/byte-sized-episode-2-the-creation-of-graph-theory-34g1").then((response)=> {return response.json()}).then((data) => setArticle(data)) 
    },[]
)
    return (
        <div>
            <div>{article.title}</div>
             <div className="prose">
                {parse(article.body_html)}
            </div>   
        </div>
    )
  }