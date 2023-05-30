import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "../utils/api-utils"

function Article() {
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticle(article_id).then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
        
    }, [])
    if(isLoading){
        return <p>Article Loading...</p>
    }
    

    return (
        <>
        <main><h2>{article.title}</h2>
        <img src={article.article_img_url} alt={`represents ${article.topic}`}></img>
        <p class='article-author'>Posted by {article.author}</p>
        <p class='article-body'>{article.body}</p></main>

        </>
    )

}

export default Article