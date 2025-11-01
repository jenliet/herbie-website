import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurWhy from "./pages/OurWhy";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/common/ScrollToTop"; // ✅ import

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop /> {/* ✅ triggers scroll on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-why" element={<OurWhy />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />       
      </Routes>
    </>
  );
};

export default App;
