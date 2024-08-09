import parse from 'html-react-parser'
import dayjs from "dayjs";


export async function generateMetadata ({params}){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json()
    return {
        title: article.title,
        openGraph: {
          title: article.title,
          description: article.description,
          images: [{url: article.social_image}],
        },
      }
    }
   

export default async function Page({params}){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json()

    return (
        <div className="xl:m-auto xl:max-w-screen-xl min-h-screen font-sans p-8">
            <div className="flex flex-col place-items-center mt-24 gap-8">
                <div className="flex flex-col place-items-center gap-5">
                    <div className="font-semibold text-4xl">{article.title}</div>
                    <div className="flex gap-6">
                       <div className="flex gap-2">
                            {/* <div className="text-username-color font-medium text-sm">{article.user}</div> */}
                       </div>
                        <div className="text-username-color font-medium text-sm">{dayjs(article.published_at).format(`MMM DD, YYYY`)}</div>
                    </div>
                </div>
                <div className="prose">
                    {parse(`${article.body_html}`)}
                </div>   
            </div>
        </div>
    )
}