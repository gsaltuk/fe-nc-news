import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle, fetchComments, increaseVote, decreaseVote, postComment } from "../utils/utils"

function Article({ user }) {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newComment, setNewComment] = useState({
        "username": "",
        "body": ""
    })
    const { article_id } = useParams()
    const [commentPostMessage, setCommentPostMessage] = useState('')
    const [disableForm, setDisableForm] = useState(false)
console.log(user)
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

    function handleChange(event) {
        setNewComment({ ...newComment, username: user.username, body: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (newComment.body.length === 0) {
            return setCommentPostMessage('Please input a comment!')
        }
        if (!disableForm) {

            postComment(article_id, newComment).then(({ commentPosted }) => {
                setComments((currComments) => {

                    return [commentPosted[0], ...currComments]
                })

                setNewComment({
                    "username": "",
                    "body": ""


                })

                setCommentPostMessage('Comment posted succesfully!')
                setDisableForm(true)

            }).catch((err) => {
                if (err) {
                    setCommentPostMessage('Error posting comment, please try again!')
                }
            })
        } else {
            setCommentPostMessage('Comment already posted!')
        }

    }



    if (isLoading) {
        return <p>Article Loading...</p>
    }
    return (
        <>

            <main>
                <h2 className='article-title'>{article.title}</h2>
                <p>{new Date(article.created_at).toUTCString()}</p>
                <img src={article.article_img_url} alt={`represents ${article.topic}`}></img>
                <p className='article-author'>Posted by {article.author}</p>
                <p className="article-votes">{article.votes} people love this goss!</p>
                <button onClick={() => { incrementVote(article_id) }} className="vote-button">🔥</button>
                <button onClick={() => { reduceVote(article_id) }} className="vote-button">❄️</button>
                <p className='article-body'>{article.body}</p></main>
            <section>
                <form onSubmit={handleSubmit}>
                    <h3>Add a comment!</h3>
                    <textarea
                        name="newcomment"
                        cols="30"
                        rows="5"
                        placeholder="Add comment here"
                        id="title"
                        type="text"
                        value={newComment.body}
                        onChange={handleChange}
                    ></textarea><br></br>
                    <button name="submitbutton">Submit</button>
                </form>
                <p>{commentPostMessage}</p>
                <h4 className="comment-title">Comments</h4>
                <ul>
                    {comments.map((comment) => {
                        const date = comment.created_at
                        const newDate = new Date(date)
                        return (
                            <>
                                <li key={comment.comment_id}>
                                    <p className="comment-body">{comment.body}</p>
                                    <p className="comment-author">{comment.author}</p>
                                    <p className="comment-date">{newDate.toLocaleString()}</p>
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