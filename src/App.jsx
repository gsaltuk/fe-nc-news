import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Article from './components/Article'
import Users from './components/Users'
import '../src/App.css'


function App() {

  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles  />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
