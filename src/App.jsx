import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Profile from './pages/Profile'
import Register from './pages/Register'
function App() {
return(
  <>
  
  
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App
