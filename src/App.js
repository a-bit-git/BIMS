import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import CategoryPage from "./components/CategoryPage";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AllBooks from "./components/AllBooks";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/all-books/:mode" element={<AllBooks />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
