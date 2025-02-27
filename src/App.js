import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Panier from './components/Panier';
import About from './pages/About';






function App() {
  
  return (
    <div className="App">
       
      <NavBar/>
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/panier" element={<Panier/>} />

     </Routes>
    
    
    <Footer/>
    </div>
  );
}

export default App;
