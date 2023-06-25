import React from 'react';
import imgBanner from './../../image/ImageBanner.png';

import * as Styled from './Banner.styles';

export function Banner() {
  return (
    <>
    <Styled.Container>
      <Styled.imgContainer>
      <img
        src={imgBanner}
        alt="Imagem de uma mulher em uma moldura quadrada com as bordas arredondadas com cores laranja e azul por trás"
      /> 
      </Styled.imgContainer>
      </Styled.Container>
    <div>
      <h1>Carol de Lira</h1>
      <h2>Desenvolvedora</h2>
      <h2>Designer UX/UI</h2>
      <img src="" alt="" />
      <button type="button">Veja meus trabalhos</button>
    </div>
    </>
  )
}