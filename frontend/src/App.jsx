
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Add, Edit, Home, Navbar } from "./Components"

const App=()=> {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-student" element={<Add />}/>
      <Route path="/edit-student/:id" element={<Edit />}/>
    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
