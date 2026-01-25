import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import CategoryPage from "./components/CategoryPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
