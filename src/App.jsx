import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About"
import { useState } from "react";
import "./app.scss";

function App() {
  const [menuOpen,setMenuOpen] = useState(false) 
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
      <Intro />
      <Portfolio />
      <About />
      <Contact />     
      </div>
   </div>
  );
}

export default App;
