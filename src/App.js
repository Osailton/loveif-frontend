import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Regulamento from './pages/regiment/Regiment';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Container } from '@mui/material';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Regulamento', url: '/regiment' },
  { title: 'Pontuações', url: '/' },
  { title: 'Mural', url: '/' },
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
            <Route path="/regiment" element={<Regulamento />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
