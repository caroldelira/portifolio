import React from 'react';

import { Banner } from './pages/Banner';
import { Contatos } from './pages/Contatos';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header/Header';
import { Sobre } from './pages/Sobre';
import { Trabalhos } from './pages/Trabalhos';

import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Trabalhos />
      <Contatos />
      <Footer />
      <GlobalStyles />
    </>
  );
}
