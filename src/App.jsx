import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'

function App() {

  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
