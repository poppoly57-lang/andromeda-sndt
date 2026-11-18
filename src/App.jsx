import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./pages/home.jsx";
import Academy from "./pages/academy.jsx";
import Videos from "./pages/Videos.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;