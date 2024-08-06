import { ArticleCard } from "@/components/articlecard";

export default async function loadMore() {
    const response = await fetch(`https://dev.to/api/articles?username=ben&page=${pages}&per_page=${perPage}`)
    const newdata = await response.json()
    const articles = [...articles, ...newdata]

    return(
        <div className="flex flex-col xl:max-w-screen-xl m-auto py-[100px] gap-8">
            <h3 className="font-bold text-2xl text-title-color px-8 xl:px-0">All Blog Post</h3>
            <div className="text-center">
                <div className="grid xl:grid-cols-3 xl:gap-5 grid-cols-1 w-full xl:m-auto xl:max-w-screen-xl md:grid-cols-2">
                {articles.map((item) => (
                    <ArticleCard key={item.id} article={item}/>
                    ))}
                </div>
                {!ended && (
                    <button disabled={loading}  className="btn btn-outline border border-button-bg rounded-md mt-[100px] py-3 px-5 text-button-bg text-base font-medium " onClick={loadMore}>
                        {loading && (
                            <span class="loading loading-spinner loading-xs"></span>
                        )}
                        Load more</button>
                )}
            </div>
         </div>
    )

}