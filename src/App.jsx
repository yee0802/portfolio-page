import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <section id="theme-toggle">
        <img src="./src/assets/sun.svg" alt="" width={20} />
      </section>

      <main>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
