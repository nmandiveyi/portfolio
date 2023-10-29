import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import { Divider } from './components/Divider';
import Professional from './components/Professional';
import Footer from './components/Footer';
import Skills from './components/Skills';



function App() {
  return (
      <div className='relative bg-primary col-span-6 col-start-4 min-h-screen'>
        <NavBar />
        <Intro />
        <Divider />
        <Professional />
        <Divider />
        <Skills />
        <Footer />
      </div>
  );
}

export default App;
