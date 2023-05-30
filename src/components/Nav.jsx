import { Link } from "react-router-dom";


function Nav() {
    return (
        <>
        <nav>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
            <form>
                <input placeholder="Search!"></input>
                <button>🔎</button>
            </form>
        </nav>
        </>
    )
}

export default Nav;