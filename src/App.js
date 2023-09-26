import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Eyebrows from './pages/Eyebrows'
import LashLifting from './pages/LashLifting'
import Extension from './pages/Extension'
import Home from './pages/Home'
import React from 'react';
import Reservas from './pages/Reservas'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/LashLifting' element={<LashLifting />} />
        <Route path='/Cejas' element={<Eyebrows />} />
        <Route path='/Extension' element={<Extension />} />
        <Route path='/Reservas' element={<Reservas />} />
        <Route path='/QuienesSomos' element={<QuienesSomos />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
