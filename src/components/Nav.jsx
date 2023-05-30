import { Link } from "react-router-dom";


function Nav() {
    return (
        <>
        <nav>
            <Link to=""><img src='src/assets/logo-ph.png'></img></Link>
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