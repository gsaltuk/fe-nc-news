import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle, fetchComments } from "../utils/api-utils"

function Article() {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticle(article_id).then(({article}) => {
            setArticle(article)
        })
        
    }, [])

    useEffect(() => {
        fetchComments(article_id).then(({comments}) => {
            console.log(comments)
            setComments(comments)
        })
    },[])

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
        </section>
        </>
    )

}

export default Article