import "./App.css";
import "./variables.css";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes />
      <Navbar />
      <Footer />
    </>
  );
}
export default App;
