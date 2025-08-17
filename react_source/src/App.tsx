import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

import Home from './pages/Home';

function App() {
    useEffect(() => {
      AOS.init({ once: true, duration: 800 });
      AOS.refresh();
  }, []);
  return (
      <Home />
  );
  
}

export default App;
