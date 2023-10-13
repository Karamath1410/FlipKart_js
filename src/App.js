import './App.css';
import './css/bootstrap.css'
import Header from '../src/components/Header.js';
import Catog from './components/Catlog';
import Forms from '../src/components/Forms.js';
import React from 'react';
import Banner from '../src/components/Banner';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row head'>
       <Header/>
      </div>
      <Catog/>
      <Forms/>
      <Banner/>
    </div>
    </>
  );
}

export default App;