import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './component/home/Home'
import { Header } from './component/header/Header'
import { Contact } from './component/contact/Contact';
import { Cv } from './component/cv/Cv';
import { Portfolio } from './component/portfolio/Portfolio';
import { useEffect } from 'react';


function App() {

  // useEffect(() => {
  //   const hideMenu = () => {
  //     if (window.innerWidth > 640 && isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener('resize', hideMenu);

  //   return () => {
  //     window.removeEventListener('resize', hideMenu);
  //   };
  // });
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>

  );
}

export default App;
