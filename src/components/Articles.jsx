import { useState, useEffect } from "react"
import { fetchArticles, fetchArticle } from "../utils/utils"
import { Link } from "react-router-dom"




function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sort, setSort] = useState('created_at')
    const [order, setOrder] = useState('descending')

    useEffect(() => {
        fetchArticles(sort, order).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [sort, order])


    function handleSortChange(event) {
        event.preventDefault()
        setSort(event.target.value)
    }

    function handleOrderChange(event) {
        event.preventDefault()
        setOrder(event.target.value)
    }
    if (isLoading) {
        return <p>Articles Loading...</p>
    }
    return (
        <>
            <main>
                <h2>ARTICLES</h2>
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
                        return <li key={article.article_id}>
                            <h3>{article.title}</h3>
                            <Link to={`/articles/${article.article_id}`}><img className="article_image" alt={`representing ${article.topic}`} src={article.article_img_url}></img></Link>
                            <p>{`Posted by ${article.author}`}</p>
                            <p>Votes {article.votes}</p>
                            <p>Comments {article.comment_count}</p>
                            <p>Date {new Date(article.created_at).toDateString()}</p>
                        </li>
                    })}
                </ol>
            </main>
        </>
    )
}

export default Articles