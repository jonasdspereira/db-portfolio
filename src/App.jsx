import "./App.css";
import "./variables.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
