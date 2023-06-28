import React from 'react';

import github from '../../image/logos/github.svg';
import behance from '../../image/logos/behance.svg';

import * as Styled from './Contatos.styles';

export function Contatos() {
  return (
    <Styled.Container>
      <p>Ver mais trabalhos e Projetos</p>
      <Styled.ContatoContainer>
        <Styled.RedeSocial
          href="https://github.com/caroldelira"
          target="_blank"
        >
          <img src={github} alt="logo do github para acessar o software" />
          <span>Desenvolvimento</span>
        </Styled.RedeSocial>

        <Styled.RedeSocial
          href="https://www.behance.net/caroldelira"
          target="_blank"
        >
          <img src={behance} alt="logo do behance para acessar o software" />
          <span>Design UX/UI</span>
        </Styled.RedeSocial>
      </Styled.ContatoContainer>
    </Styled.Container>
  );
}
