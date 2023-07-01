import React from 'react';

import * as Styled from './Card.styles';

interface CardProps {
  id: string;
  imageCard: string;
  imageLogo: string[];
  titulo: string;
  redeSocial: string;
  desc: string;
  tecnology: string[];
  descTec: string[];
  link: string;
  color: 'blue' | 'green' | 'yellow' | 'pink' | 'orange';
  design?: boolean;
  descDesign?: string;
}

export function Card({
  imageCard,
  imageLogo,
  titulo,
  redeSocial,
  desc,
  descTec,
  tecnology,
  link,
  color,
  design,
  descDesign,
  id,
}: CardProps) {
  return (
    <Styled.Container id={id} color={color}>
      <Styled.ImageContainer color={color}>
        <Styled.ImageCard color={color}>
          <img src={imageCard} alt="" />
        </Styled.ImageCard>
        <Styled.imageLogos color={color}>
          {imageLogo.map((logo, index) => (
            <img key={index} src={logo} alt="" />
          ))}
        </Styled.imageLogos>
      </Styled.ImageContainer>
      <Styled.TextContainer color={color}>
        <h4>
          {titulo}{' '}
          <Styled.Link color={color} href={link} target="_blank">
            (Acessar {redeSocial})
          </Styled.Link>
        </h4>
        <p>{desc}</p>
        <p>Tecnologias utilizadas:</p>
        <ul>
          {tecnology.map((tech, index) => (
            <li key={index}>
              <span>{tech}: </span>
              {descTec[index]}
            </li>
          ))}
        </ul>
        {design ? (
          <>
            <p>Funcionalidades:</p>
            <ul>
              <Styled.li color={color}>{descDesign}</Styled.li>
            </ul>
          </>
        ) : null}
      </Styled.TextContainer>
    </Styled.Container>
  )
}
