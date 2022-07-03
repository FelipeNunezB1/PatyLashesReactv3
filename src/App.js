import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eyebrows from './components/Eyebrows'
import LashLifting from './components/LashLifting'
import Extension from './components/Extension'
import Home from './components/Home'
import React from 'react';
import Reservas from './components/Reservas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LashLifting' element={<LashLifting />} />
        <Route path='/Cejas' element={<Eyebrows />} />
        <Route path='/Extension' element={<Extension />} />
        <Route path='/Reservas' element={<Reservas />} />


      </Routes>
    </BrowserRouter>
  );
}
