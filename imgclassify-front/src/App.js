import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Classifier/>} />
          <Route exact path='/list' element={<ImageList/>} />
          <Route exact path='*' element={<Classifier/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
