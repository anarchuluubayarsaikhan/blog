import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import "@/components/dayjs-mn"
dayjs.extend(relativeTime);

export function ArticleCard({ article }) {
    return (
        <div key={article.id} className="card border border-border-card-color rounded-xl p-4 gap-4 font-sans">
            <Image src={article.social_image} width={360} height={240} className="w-full rounded-md aspect-video object-cover bg-slate-600" alt="Image" />
            <Link href={article.path} className="card-body">
            <div className='flex gap-2 flex-wrap'>
                {article.tag_list.map((tag)=> 
                  <div className="badge text-badge-text  bg-slate-50 py-2 px-3 rounded-md">{tag}</div>
                )}
              </div>
                <div className="badge text-badge-text  bg-slate-50 py-2 px-3 rounded-md">{article.tags}</div>
                <div className="text-desc-color text-2xl font-semibold">{article.description}</div>
                <div>{dayjs(article.published_at).locale('mn').fromNow()}</div>
            </Link>
        </div>
    )
}