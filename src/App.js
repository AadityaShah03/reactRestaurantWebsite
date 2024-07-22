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

import ContactFr from './pages/ContactFR.js';
import ReserveFr from './pages/ReserveFR.js';
import HomepageFr from './pages/HomepageFR.js';
import SearchFr from './pages/SearchFR.js';
import GalleryFr from './pages/GalleryFR.js';
import MenuFr from './pages/MenuFR.js';



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
            <Route path="/fr" element={<HomepageFr />} />
            <Route path="/menu/fr" element={<MenuFr />} />
            <Route path="/contact/fr" element={<ContactFr />} />
            <Route path="/reserve/fr" element={<ReserveFr />} />
            <Route path="/search/fr" element={<SearchFr />} />
            <Route path="/gallery/fr" element={<GalleryFr />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
