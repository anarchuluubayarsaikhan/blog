import { useEffect, useState } from "react"
import { ArticleCard } from "./articlecard"


export function Post() {
    const [articles, setArtricles] = useState([])
    const [pages, setPages] = useState(0)
    const [ended, setEnded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState("all")
    const perPage = 9

    const tags = [
        { value: "all", name: "All" },
        { value: "jokes", name: "Jokes" },
        { value: "watercooler", name: "Watercooler" },
        { value: "discuss", name: "Discuss" },
    ]

    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=ben&per_page=${perPage}&tag=${selected === "all" ? "" : selected} `).then((response) => {
            return response.json()
        }).then((data) => { setArtricles(data) });
        setPages(1)
    }, [selected]);

    async function loadMore() {
        setLoading(true)
        const response = await fetch(`https://dev.to/api/articles?username=ben&page=${pages}&per_page=${perPage}&tag=${selected === "all" ? "" : selected}`)
        const newdata = await response.json()
        setArtricles([...articles, ...newdata])
        setPages(pages + 1)
        if (newdata.length < perPage) {
            setEnded(true)
        } setLoading(false)
    };


    return (
        <div className="flex flex-col xl:max-w-screen-xl m-auto py-[100px] gap-8 ">
            <h3 className="font-bold text-2xl text-title-color">All Blog Post</h3>
            <div className="flex gap-3">
                {tags.map((tag) =>
                    <div key={tag.value} className={`font-bold text-xs cursor-pointer ${selected === tag.value ? "text-orange-500" : "text-selected"}`} onClick={() => setSelected(tag.value)}>{tag.name}</div>
                )}
            </div>
            <div className="text-center">
                <div className="grid xl:grid-cols-3 xl:gap-5 grid-cols-1  w-full xl:m-auto xl:max-w-screen-xl md:grid-cols-2">
                    {articles.map((item) => (
                        <ArticleCard key={item.id} article={item} />
                    ))}
                </div>
                {!ended && (
                    <button disabled={loading} className="btn btn-outline border border-button-bg rounded-md mt-[100px] py-3 px-5 text-button-bg text-base font-medium" onClick={loadMore}>
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