import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "../utils/api-utils"

function Article() {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    console.log(article_id)
    console.log(article)

    useEffect(() => {
        fetchArticle(article_id).then(({article}) => {
            setArticle(article)
        })
        
    }, [])

    return (
        <>
        <main><h2>{article.title}</h2>
        <img src={article.article_img_url}></img>
        <p class='article-author'>Posted by {article.author}</p>
        <p class='article-body'>{article.body}</p></main>

        </>
    )

}

export default Article