import React from 'react';
import arrowBG from '../../image/arrowContainer.png';

import { Carousel } from '../../components/Carousel';

import { projetosDev } from '../../models/projetosDev';
import { projetosDes } from '../../models/projetosDes';

import * as Styled from './Trabalhos.styles';
import { CarouselMobile } from '../../components/CarouselMobile/CarouselMobile';

export function Trabalhos() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Styled.Container id="PaginaTrabalhos">
      <img id="imgPage" src={arrowBG} alt="" />

      <Styled.ContentDev id="DesenvolvimentoWeb">
        <Styled.H3>Desenvolvimento Web</Styled.H3>

        {isMobile ? (
          <CarouselMobile projects={projetosDev} />
        ) : (
          <Carousel projects={projetosDev} />
        )}
      
      </Styled.ContentDev>

      <Styled.ContentDes id="Design">
        <Styled.H3S>Design UX/UI</Styled.H3S>

        {isMobile ? (
          <CarouselMobile projects={projetosDes} />
        ) : (
          <Carousel projects={projetosDes} />
        )}
      </Styled.ContentDes>
    </Styled.Container>
  );
}
