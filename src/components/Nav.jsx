import { Link } from "react-router-dom";


function Nav({username, name, avatar_url}) {
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-logo"><Link to="" ><img src='src/assets/chit-chat-logo-white.svg'></img></Link></li>
                    <li className="nav-list-item"><Link to="/articles" style={{ textDecoration: 'none' }}>Articles</Link></li>
                    <li className="nav-list-item"><Link to="/topics" style={{ textDecoration: 'none' }}>Topics</Link></li>
                    
                    <li className="nav-list-item"><Link to="/users" style={{ textDecoration: 'none' }}>Users</Link></li>
                <li className="nav-list-item">Logged in as {name}</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;