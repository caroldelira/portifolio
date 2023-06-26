import React from 'react';

import { Banner } from "./pages/Banner";
import { Contatos } from "./pages/Contatos";
import { Footer } from "./pages/Footer";
import { Sobre } from "./pages/Sobre";
import { Trabalhos } from "./pages/Trabalhos";

import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <Banner />
      <Sobre />
      <Contatos />
      <Footer />
      <Trabalhos />
      <GlobalStyles />
    </>
  );
}
