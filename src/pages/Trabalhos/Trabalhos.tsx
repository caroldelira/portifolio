import React from 'react';
import arrowBG from '../../image/arrowContainer.svg';

import { Carousel } from '../../components/Carousel';

import { projetosDev } from '../../models/projetosDev';
import { projetosDes } from '../../models/projetosDes';

import * as Styled from './Trabalhos.styles';

export function Trabalhos() {
  return (
    <Styled.Container id="PaginaTrabalhos">
      <Styled.BG id="imgPage" src={arrowBG} alt="" />
      <Styled.Content>
        <Styled.H3>Desenvolvimento Web</Styled.H3>

        <Carousel projects={projetosDev} />
        <div id="DesenvolvimentoWeb"></div>

        <Styled.H3S>Design UX/UI</Styled.H3S>
        <Carousel projects={projetosDes} />
        <div id="DesignUXUI"></div>
      </Styled.Content>
    </Styled.Container>
  );
}
