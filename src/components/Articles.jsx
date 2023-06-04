import { useState, useEffect } from "react"
import { fetchArticles, fetchArticle } from "../utils/utils"
import { Link, useSearchParams, useParams } from "react-router-dom"
import MediaCard from "./Card"



function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [newParams, setNewParams] = useState({
        sort: 'created_at',
        order: 'desc'
    })
    const {topic} = useParams()

    function handleSortChange(event) {
        event.preventDefault()
        setNewParams({ ...newParams, sort: event.target.value })
    }
    function handleOrderChange(event) {
        event.preventDefault()
        setNewParams({ ...newParams, order: event.target.value })
    }
    useEffect(() => {
        setSearchParams(newParams);
    }, [newParams]);

    // const sort = searchParams.get('sort')
    // const order = searchParams.get('order')

    useEffect(() => {
        fetchArticles(topic, newParams.sort, newParams.order).then(({ articles }) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [newParams.sort, newParams.order])

    if (isLoading) {
        return <p>Articles Loading...</p>
    }
    return (
        <>
            <main>
                <h2 className="main-title">ARTICLES</h2>
                <section>
                    <form>
                        <select onChange={handleSortChange} id="sort">
                            <option value='created_at'>Date Posted</option>
                            <option value='comment_count'>Comment Count</option>
                            <option value='votes'>Votes</option>
                        </select>
                        <select onChange={handleOrderChange} id="order">
                            <option value='desc'>Descending</option>
                            <option value='asc'>Ascending</option>
                        </select>
                    </form>
                </section>
                <ol>
                    {articles.map((article) => {
                        return MediaCard(article.article_img_url, article.title, article.author, article.article_id, article.created_at)
                    })}
                </ol>

            </main>
        </>
    )
}

export default Articles

// //<li className="article-container" key={article.article_id}>
// <h3>{article.title}</h3>
// <Link to={`/articles/${article.article_id}`}><img className="article_image" alt={`representing ${article.topic}`} src={article.article_img_url}></img></Link>
// <p>{`Posted by ${article.author}`}</p>
// <p>Votes {article.votes}</p>
// <p>Comments {article.comment_count}</p>
// <p>Date {new Date(article.created_at).toDateString()}</p>
// </li>