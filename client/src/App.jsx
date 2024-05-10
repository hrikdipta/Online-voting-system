import Navbar_component from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
      <Navbar_component/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/voter/login' element={<VoterLogin />} />
        <Route path='/admin/login' element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  )
 
}

export default App
