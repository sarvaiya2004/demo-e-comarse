
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage";

// import Login from './components/Login'


function App() {
  return (<BrowserRouter>
    <Routes>
      {/* <Route path='/Login' element={ <Login /> } /> */}
      {/* <Route path='/Register' element={ <Register /> } /> */}
      <Route path='/About' element={ <About /> } />
      <Route path='/Home' element={ <Home />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/' element={ <Navbar /> } />
      
  
  
      
    </Routes>
    
    </BrowserRouter>
    
   )
      
  
}

export default App;



