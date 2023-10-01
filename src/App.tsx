import React, { ReactNode } from 'react';
import './index.css';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';



function App() {
  return (
      <div className='bg-primary col-span-6 col-start-4'>
        <NavBar />
      </div>
  );
}

export default App;
