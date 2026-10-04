import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import DocumentIntelligence from "./pages/DocumentIntelligence";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/work" element={<Work />} />

        <Route
          path="/work/document-intelligence"
          element={<DocumentIntelligence />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;