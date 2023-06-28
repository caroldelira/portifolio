import React from 'react';
import imgBanner from './../../image/ImageBanner.png';
import arrowBanner from './../../image/arrowUp.svg';

import { Button } from '../../components/Button';

import * as Styled from './Banner.styles';

export function Banner() {
  return (
    <Styled.Container>
      <Styled.ImgContainer>
        <img
          src={imgBanner}
          alt="Imagem de uma mulher em uma moldura quadrada com as bordas arredondadas com cores laranja e azul por trás"
        />
      </Styled.ImgContainer>
      <Styled.ContentContainer>
        <Styled.H1>Carol de Lira</Styled.H1>
        <Styled.H2Pink>Desenvolvedora</Styled.H2Pink>
        <Styled.H2Yellow>Designer UX/UI</Styled.H2Yellow>
        <Styled.ArrowUp src={arrowBanner} alt="traço cinza" />
        <Styled.ContentButton>
          <Button label="Veja meus trabalhos" targetId="PaginaTrabalhos" />
        </Styled.ContentButton>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
