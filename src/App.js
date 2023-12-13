import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Container } from '@mui/material';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Salas', url: '/' },
  { title: 'Regimento', url: '/about' },
  { title: 'Sobre', url: '/about' },
];

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Navbar sections={sections} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
