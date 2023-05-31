import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Article from './components/Article'
import Users from './components/Users'
import Topics from './components/Topics'
import ArticleByTopic from './components/ArticleByTopic'
import '../src/App.css'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState({
    "username": "default_guest",
    "name": "Guest User",
    "avatar-url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  })

  return (
    <BrowserRouter>
      <>
        <Nav username={user.username} name={user.name} avatar_url={user.avatar_url} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
          <Route path="/users" element={<Users user={user} setUser={setUser} />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/topics/:topic" element={<ArticleByTopic/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
