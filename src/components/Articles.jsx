import { useState, useEffect } from "react"
import { fetchArticles, fetchArticle } from "../utils/utils"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"



function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {topic} = useParams()
    useEffect(() => {
        fetchArticles(topic).then(({ articles }) => {
            setArticles(articles)
            setIsLoading(false)
        })
    })
    if(isLoading){
        return <p>Articles Loading...</p>
    }
    return (
        <>
        <main>
            <ol>
                {articles.map((article) => {
                    return <li key={article.article_id}>
                        <h3>{article.title}</h3>
                        <Link to={`/articles/${article.article_id}`}><img className="article_image" alt={`representing ${article.topic}`} src={article.article_img_url}></img></Link>
                        <p>{`Posted by ${article.author}`}</p>
                    </li>
                })}
            </ol>
            </main>
        </>
    )
}

export default Articles