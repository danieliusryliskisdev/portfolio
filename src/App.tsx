import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import "./styles/global/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Home />}></Route>
        <Route path="/portfolio/experience" element={<Experience />}></Route>
        <Route path="/portfolio/projects" element={<Projects />}></Route>
        <Route path="/portfolio/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
