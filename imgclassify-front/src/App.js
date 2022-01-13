import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import {Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
      <div className='App'>
     
     <Classifier/>
      
      </div>
   
  );
}

export default App;