import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import MainPage from './components/pages/main-page/MainPage'
import Catalog from './components/pages/catalog/Catalog';


function App() {

  return (

    <div className='container'>
      <MainPage />
      <Catalog />
    </div>

  );
}

export default App;
