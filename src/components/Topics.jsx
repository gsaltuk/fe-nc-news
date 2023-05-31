import { Link } from "react-router-dom";
import { fetchTopics } from "../utils/utils";
import { useEffect, useState } from "react";

function Topics() {
    const [isLoading, setIsLoading] = useState(true)
    const [topics, setTopics] = useState([])
useEffect(() => {
    fetchTopics().then(({topics}) => {
        setTopics(topics)
        setIsLoading(false)

    })
}, [])

if (isLoading) {
    return <p>Topics Loading...</p>
}
return (
    <>
    <main>
        <ol>
        {topics.map((topic) => {
            return ( 
            <>
            <li>
            <Link to={`/topics/${topic.slug}`}><img src={`src/assets/${topic.slug}.jpg`}></img></Link>
            </li>
            </>)
        })}
        </ol>
    </main>
    </>
)

}

export default Topics;