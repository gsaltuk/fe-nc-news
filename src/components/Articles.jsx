import { useState, useEffect } from "react"
import { fetchArticles, fetchArticle } from "../utils/api-utils"
import { Link } from "react-router-dom"




function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then(({ articles }) => {
            setArticles(articles)
        })
    })
    return (
        <>
            <h2>ARTICLES</h2>
            <ol>
                {articles.map((article) => {
                    return <Link to={`/articles/${article.article_id}`}><li key={article.article_id}>
                        <h3>{article.title}</h3>
                        <img class="article_image" src={article.article_img_url}></img>
                        <p>{`Posted by ${article.author}`}</p>
                    </li></Link>
                })}
            </ol>

        </>
    )
}

export default Articles