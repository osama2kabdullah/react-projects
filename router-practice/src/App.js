import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Guide from './components/Guide';
import Contact from './components/Contact';
import CountryDetail from './components/CountryDetail';
import DataChart from './components/DataChart';
import Population from './components/Population';
import Area from './components/Area';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* countries */}
        <Route path='/' element={<Countries></Countries>}>
          <Route path='/:countryDetails' element={<CountryDetail></CountryDetail>}>
          </Route>
        </Route>
        {/* chart */}
        <Route path='/chart' element={<DataChart></DataChart>}>
          <Route path='/chart/population' element={<Population></Population>}></Route>
          <Route path='/chart/area' element={<Area></Area>}></Route>
        </Route>
        
        <Route path='/tourguid' element={<Guide></Guide>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
