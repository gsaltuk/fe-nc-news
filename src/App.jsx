import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Article from './components/Article'
import Users from './components/Users'
import Topics from './components/Topics'
import '../src/App.css'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState({
    "username": "tickle122",
    "name": "Tom Tickle",
    "avatar-url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  })

  return (
    <BrowserRouter>
      <>
        <Nav username={user.username} name={user.name} avatar_url={user.avatar_url} />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/topics/:topic" element={<Articles />}></Route>
          <Route path="/articles/:article_id" element={<Article user={user} />}></Route>

          <Route path="/users" element={<Users user={user} setUser={setUser} />}></Route>
          <Route path="/topics" element={<Topics />}></Route>

        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
