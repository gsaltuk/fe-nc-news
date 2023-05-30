import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Article() {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticle(article_id).then((article) => {
            setArticle(article)
        })
        
    })

}

export default Article