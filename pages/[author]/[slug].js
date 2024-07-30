import { useEffect, useState } from "react"
import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { Header } from "@/components/header"
import Image from "next/image"
import dayjs from "dayjs";

export default function Slug() {
    const [article, setArticle] = useState()
    const router = useRouter()
    const {author, slug} = router.query
    useEffect(() => {
        fetch(`https://dev.to/api/articles/${router.query.author}/${router.query.slug}`)
        .then((response)=> {return response.json()})
        .then((data) => setArticle(data)) 
    },[]
)

if (!article){
    return <div>Loading...</div>
}


    return (
        <div className="xl:m-auto xl: max-w-screen-xl p-8 ">
            <Header/>
            <div className="flex flex-col place-items-center mt-24 gap-8">
                <div className="flex flex-col place-items-center gap-5">
                    <div className="font-semibold text-4xl">{article.title}</div>
                    <div className="flex gap-6">
                       <div className="flex gap-2">
                            <Image src={article.user.profile_image_90} width={28} height={28} className="rounded-3xl"/>
                            <div className="text-username-color font-medium text-sm">{article.user.name}</div>
                       </div>
                        <div className="text-username-color font-medium text-sm">{dayjs(article.published_at).format(`MMM DD, YYYY`)}</div>
                    </div>
                </div>
                <div className="prose">
                    {parse (`${article.body_html}`)}
                </div>   
            </div>
        </div>
    )
  }