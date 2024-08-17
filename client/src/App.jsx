import { Route, Routes } from "react-router-dom"
import "./index.css"
import Header from "./layout/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
