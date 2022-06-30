import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as global from "./components";
import { GlobalStyles } from "./globalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <global.News />
      <global.Footer />
    </BrowserRouter>
  );
}

export default App;
