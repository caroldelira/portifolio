import React from 'react';
import { Button } from '../../components/Button';

import * as Styled from './Header.styles';

export function Header() {
  return (
    <Styled.Container>
      <Styled.ListaLink>
        <a href="#DesenvolvimentoWeb">Desenvolvimento Web</a>
        <a href="#DesignUXUI">Design UX/UI</a>
        <a href="#VerMaisTrabalhos">Ver mais Trabalhaos</a>
        <a href="#Contatos">Contatos</a>
      </Styled.ListaLink>
    </Styled.Container>
  );
}
