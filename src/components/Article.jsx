import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle, fetchComments } from "../utils/api-utils"

function Article() {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

function Article() {


    const {article_id} = useParams()

    useEffect(() => {
        fetchArticle(article_id).then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
        
    }, [])

    useEffect(() => {
        fetchComments(article_id).then(({comments}) => {
            setComments(comments)
        })
    },[])

      if(isLoading){
        return <p>Article Loading...</p>
    }
    return (
        <>
        <main><h2 className='article-title'>{article.title}</h2>
        <img src={article.article_img_url} alt={`represents ${article.topic}`}></img>
        <p className='article-author'>Posted by {article.author}</p>
        <p className='article-body'>{article.body}</p></main>
        <section>
            <h4 className="comment-title">Comments</h4>
            {comments.map((comment) => {
                return (
                    <>
                    <p className="comment-body">{comment.body}</p>
                    <p className="comment-author">{comment.author}</p>
                    </>
                )
            })}

        })
        

}

export default Article