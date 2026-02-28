import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/about' element={ <About /> } ></Route>
      </Routes>

      <br />
      <hr />
      <h1>Footer</h1>
    </>
  )
}

export default App