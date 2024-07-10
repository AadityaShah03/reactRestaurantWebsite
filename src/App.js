import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';

import Contact from './pages/Contact.js';
import Reserve from './pages/Reserve.js';
import Homepage from './pages/Homepage.js';
import Search from './pages/Search.js';
import Gallery from './pages/Gallery.js';
import Menu from './pages/Menu.js';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/search" element={<Search />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
