import { Route, Routes, route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Header from "./pages/components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
