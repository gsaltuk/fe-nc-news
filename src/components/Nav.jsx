import { Link } from "react-router-dom";


function Nav() {
    return (
        <>
        <nav>
            <ul className="nav-list">
            <li className="nav-list-logo"><Link to="" style={{ textDecoration: 'none' }}><img src='src/assets/logo-ph.png'></img></Link></li>
            <li className="nav-list-item"><Link to="/articles" style={{ textDecoration: 'none' }}>Articles</Link></li>
            <li className="nav-list-item"><Link to="/topics" style={{ textDecoration: 'none'}}>Topics</Link></li>
            <li className="nav-list-search"><form>
                <input placeholder="Search!"></input>
                <button>🔎</button>
            </form></li>
            <li className="user-icon"><Link to="/users"><img></img></Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;