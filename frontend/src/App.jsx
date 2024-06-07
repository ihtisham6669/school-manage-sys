
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Add, Home, Navbar } from "./Components"

const App=()=> {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-student" element={<Add />}/>
    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
