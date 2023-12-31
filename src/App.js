import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Regulamento from './pages/Regiment';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

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
