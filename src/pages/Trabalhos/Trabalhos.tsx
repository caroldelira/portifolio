import React from 'react';
import arrowBG from '../../image/arrowContainer.svg';

import { Card } from '../../components/Card';

import { projetosDev } from '../../models/projetosDev';
import { projetosDes } from '../../models/projetosDes';

import * as Styled from './Trabalhos.styles';

export function Trabalhos() {
  return (
    <Styled.Container id="PaginaTrabalhos">
      <Styled.BG src={arrowBG} alt="" />
      <Styled.Content>
        <Styled.H3>Desenvolvimento Web</Styled.H3> 
       
        {projetosDev.map((card) => (
          <Card key={card.id}
            id={card.id}
            color={card.color}
            desc={card.desc}
            descTec={card.descTec}
            imageCard={card.imageCard}
            imageLogo={card.imageLogo}
            link={card.link}
            redeSocial={card.redeSocial}
            tecnology={card.tecnology}
            titulo={card.titulo}
          />
        ))}
        <div id="DesenvolvimentoWeb"></div>
        
        <Styled.H3S>Design UX/UI</Styled.H3S>
       {projetosDes.map((card) => (
          <Card key={card.id}
            id={card.id}
            color={card.color}
            desc={card.desc}
            descTec={card.descTec}
            imageCard={card.imageCard}
            imageLogo={card.imageLogo}
            link={card.link}
            redeSocial={card.redeSocial}
            tecnology={card.tecnology}
            titulo={card.titulo}
            descDesign={card.descDesign}
            design={card.design}
          />
       ))}
        <div id="DesignUXUI"></div>
      </Styled.Content>
    </Styled.Container>
  );
}
