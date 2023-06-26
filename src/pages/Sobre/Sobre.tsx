import React from 'react';

import imgSobre from './../../image/arrowLaying.svg';
import imgTrabalho from './../../image/arrowLaying2.svg';

import * as Styled from './Sobre.styles'

export function Sobre() {
  return (
    <Styled.Container>
      <div>
        <img src={imgSobre} alt="" />
      </div>

      <Styled.Content>
        <Styled.H3>Sobre Mim</Styled.H3>
        <p>
          E aí, pessoal! Sou uma apaixonada pelo desenvolvimento web com um
          olhar especial para UX/UI. Trabalho com a criação de interfaces
          intuitivas e agradáveis, sempre buscando a melhor experiência para o
          usuário. Através da união entre tecnologia e design, levo um
          olhar diferenciado para cada projeto em que trabalho. Sempre procuro compreendender
          as necessidades e expectativas do público-alvo, fazendo uso do UX (Experiência do Usuário). Com base nesse
          conhecimento, projeto fluxos de trabalhos intuitivos, garantindo que
          cada passo seja uma experiência agradável. Meu
          portifólio é diversificado e cada um dos Projetos reflete minha paixão,
          dedicação e compromisso com a programação e o design.
        </p>
      </Styled.Content>
      <div>
        <img src={imgTrabalho} alt="" />
      </div>
    </Styled.Container>
  )
}