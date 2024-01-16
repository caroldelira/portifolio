import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Banner } from './pages/Banner';
import { Contatos } from './pages/Contatos';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header/Header';
import { Sobre } from './pages/Sobre';
import { Trabalhos } from './pages/Trabalhos';

import { Organizi } from './pages/Projetos/Organizi';
import { Prolimpa } from './pages/Projetos/Prolimpa';


import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
            <Sobre />
            <Trabalhos />
            <Contatos />
          </>
        }>
        </Route>
        <Route path='/projetoOrganizi' element={<Organizi />} />
        <Route path='/projetoProlimpa' element={<Prolimpa />} />
      </Routes>
      <Footer />
    </Router>
  );
}
