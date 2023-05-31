import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle, fetchComments, increaseVote, decreaseVote } from "../utils/api-utils"

function Article() {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()

    useEffect(() => {
        fetchArticle(article_id).then(({ article }) => {
            setArticle(article)
            setIsLoading(false)
        })

    }, [])

    useEffect(() => {
        fetchComments(article_id).then(({ comments }) => {
            setComments(comments)
        })
    }, [])

    function incrementVote() {
        setArticle((article) => {
            return { ...article, votes: article.votes + 1 }
        })
        increaseVote(article_id).then(() => {
            return { ...article, votes: article.votes - 1 }
        }).catch((err) => {
            if (err) {
                return <p>Error with vote, please try again!</p>
            }
        })
    }

    function reduceVote() {
        setArticle((article) => {
            return { ...article, votes: article.votes - 1 }
        })
        decreaseVote(article_id).then(() => {
            return { ...article, votes: article.votes + 1 }
        }).catch((err) => {
            if (err) {
                return <p>Error with vote, please try again!</p>
            }
        })
    }



    if (isLoading) {
        return <p>Article Loading...</p>
    }
    return (
        <>
            <main><h2 className='article-title'>{article.title}</h2>
                <img src={article.article_img_url} alt={`represents ${article.topic}`}></img>
                <p className='article-author'>Posted by {article.author}</p>
                <p className="article-votes">{article.votes} people love this goss!</p>
                <button onClick={() => { incrementVote(article_id) }} className="vote-button">🔥</button>
                <button onClick={() => { reduceVote(article_id) }} className="vote-button">❄️</button>
                <p className='article-body'>{article.body}</p></main>
            <section>
                <h4 className="comment-title">Comments</h4>
                <ul>
                    {comments.map((comment) => {
                        return (
                            <>
                                <li key={comment.comment_id}>
                                    <p className="comment-body">{comment.body}</p>
                                    <p className="comment-author">{comment.author}</p>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default Article