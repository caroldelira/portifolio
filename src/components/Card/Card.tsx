import React from 'react';

import { Link } from 'react-router-dom'

import * as Styled from './Card.styles';

export interface CardProps {
  id: string;
  imageCard: string;
  imageLogo: string[];
  titulo: string;
  link: string;
  desc: string;
  tecnology: string[];
  descTec: string[];
  color: 'blue' | 'green' | 'yellow' | 'pink' | 'orange';
  design?: boolean;
  descDesign?: string;
  buttonLink: boolean;
}

export function Card({
  imageCard,
  imageLogo,
  titulo,
  link,
  desc,
  descTec,
  tecnology,
  color,
  design,
  descDesign,
  id,
  buttonLink,
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
        </h4>
        <Styled.P>{desc}</Styled.P>
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
              <Styled.Li color={color}>{descDesign}</Styled.Li>
            </ul>
          </>
        ) : null}
      </Styled.TextContainer>
      {buttonLink === true &&
        <Styled.ContainerButton>
          <Link to={`${link}`}>Ver mais</Link>
        </Styled.ContainerButton>
      }

    </Styled.Container>
  )
}
