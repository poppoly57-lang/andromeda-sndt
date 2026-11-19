import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./pages/Home";
import Academy from "./pages/academy.jsx";
import Videos from "./pages/Videos.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const atmosphereCandles = [
  { x: 4, y: 18, h: 52, tone: "up", delay: -8, duration: 36, opacity: 0.34 },
  { x: 11, y: 65, h: 38, tone: "down", delay: -17, duration: 43, opacity: 0.27 },
  { x: 18, y: 36, h: 67, tone: "up", delay: -23, duration: 39, opacity: 0.22 },
  { x: 25, y: 78, h: 45, tone: "down", delay: -4, duration: 47, opacity: 0.3 },
  { x: 32, y: 11, h: 34, tone: "up", delay: -26, duration: 41, opacity: 0.25 },
  { x: 39, y: 53, h: 59, tone: "down", delay: -12, duration: 44, opacity: 0.2 },
  { x: 46, y: 27, h: 41, tone: "up", delay: -31, duration: 38, opacity: 0.28 },
  { x: 53, y: 72, h: 63, tone: "down", delay: -19, duration: 46, opacity: 0.24 },
  { x: 60, y: 16, h: 48, tone: "up", delay: -6, duration: 42, opacity: 0.3 },
  { x: 67, y: 45, h: 36, tone: "down", delay: -28, duration: 37, opacity: 0.21 },
  { x: 74, y: 81, h: 54, tone: "up", delay: -14, duration: 48, opacity: 0.27 },
  { x: 81, y: 31, h: 68, tone: "down", delay: -34, duration: 40, opacity: 0.23 },
  { x: 88, y: 61, h: 43, tone: "up", delay: -21, duration: 45, opacity: 0.32 },
  { x: 96, y: 9, h: 57, tone: "down", delay: -10, duration: 39, opacity: 0.25 },
];

function App() {
  return (
    <div className="app-shell">
      <div className="market-atmosphere" aria-hidden="true">
        {atmosphereCandles.map((candle) => (
          <span
            className={`atmosphere-candle atmosphere-candle-${candle.tone}`}
            key={candle.x}
            style={{
              "--candle-x": `${candle.x}%`,
              "--candle-y": `${candle.y}%`,
              "--candle-height": `${candle.h}px`,
              "--candle-delay": `${candle.delay}s`,
              "--candle-duration": `${candle.duration}s`,
              "--candle-opacity": candle.opacity,
            }}
          />
        ))}
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;