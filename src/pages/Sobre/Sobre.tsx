import React from 'react';

import imgSobre from './../../image/arrowLaying.svg';
import imgTrabalho from './../../image/arrowLaying2.svg';

import * as Styled from './Sobre.styles';

export function Sobre() {
  return (
    <Styled.Container>
      <Styled.IMG>
        <img src={imgSobre} alt="" />
      </Styled.IMG>
      <Styled.Content id="SobreMim">
        <Styled.H3>Sobre Mim</Styled.H3>
        <p>
          E aí, pessoal! Me chamo Carol... sou uma apaixonada pelo
          desenvolvimento web com um olhar especial para UX/UI. Trabalho com a
          criação de interfaces intuitivas e agradáveis, sempre buscando a
          melhor experiência para o usuário. <br />
          <br /> Através da união entre tecnologia e design, levo um olhar
          diferenciado para cada projeto em que trabalho. Sempre procuro
          compreendender as necessidades e expectativas do público-alvo, fazendo
          uso do UX (Experiência do Usuário). Com base nesse conhecimento,
          projeto fluxos de trabalhos intuitivos, garantindo que cada passo seja
          uma experiência agradável. <br />
          <br />
          Meu portifólio é diversificado e cada um dos Projetos reflete minha
          paixão, dedicação e compromisso com a programação e o design. Minhas
          principais tecnologias utilizadas são:{' '}
          <b>
            <i>React</i>
          </b>
          ,{' '}
          <b>
            <i>WordPress</i>
          </b>
          {' '} e {' '}
          <b>
            <i>Figma</i>
          </b>
          . <br /> <br />
          No meu trabalho com WordPress e no-code, eu aproveito bastante a liberdade que tenho de usar o CSS. É mais do que só montar um projeto: é sobre usar a facilidade do no-code e, ao mesmo tempo, colocar um toque pessoal com código personalizado. Gosto muito de trabalhar essa mistura do prático com o único, onde cada detalhe reflete um pouco do meu estilo e atende as necessidades do usuário de um jeito bem criativo.
        </p>
      </Styled.Content>
      <Styled.IMG>
        <img src={imgTrabalho} alt="" />
      </Styled.IMG>
    </Styled.Container>
  );
}
