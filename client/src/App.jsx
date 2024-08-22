import { Route, Routes } from "react-router-dom"
import "./index.css"
import Header from "./layout/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
