
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About'
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage";
import Myorder from './pages/myOrder';
import ProductDitel from './pages/ProductDetail';


function App() {
  return (<BrowserRouter>
  
    <Routes>
      <Route path='/About' element={ <About /> } />
      <Route path='/Home' element={ <Home />} />
      <Route path="/myorder" element={<Myorder />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/' element={ <Navbar /> } />
      <Route path="/product-detail/:id" element={<ProductDitel />} />

    </Routes>
    </BrowserRouter>
    
   )
      
  
}

export default App;



