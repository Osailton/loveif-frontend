import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutePath from "./routes/RoutePath";
import { AuthProvider } from "./providers/AuthProvider";

const sections = [
  { title: "Home", url: "/" },
  { title: "Regulamento", url: "/regiment" },
  { title: "Pontuações", url: "/" },
  { title: "Mural", url: "/" },
  { title: "Sobre", url: "/about" },
];

function App() {
  return (
    <Container>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Navbar sections={sections} />
          <RoutePath />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
