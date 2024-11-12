import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import "./styles/global/global.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
