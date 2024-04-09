import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/header/Header';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import Aboutus from './components/About/Aboutus';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import Product from './components/product/Product';
import Login from './components/Login/Login';




function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
