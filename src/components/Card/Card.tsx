import React from "react"

import * as Styled from './Card.styles'

interface CardProps {
  imageCard: string;
  imageLogo: string[];
  titulo: string;
  redeSocial: string;
  desc: string;
  tecnology: string[];
  descTec: string[];
}

export function Card({imageCard, imageLogo, titulo, redeSocial, desc, descTec, tecnology}: CardProps) {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageCard>
          <img src={imageCard} alt="" />
        </Styled.ImageCard>
        <Styled.imageLogos>
        {imageLogo.map((logo, index) => (
            <img key={index} src={logo} alt="" />
          ))}
        </Styled.imageLogos>
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <h4>
          {titulo} <Styled.Link href="#">(Acessar {redeSocial})</Styled.Link>
        </h4>
        <p>
        Descrição:
        </p>
        <p>
        {desc}
        </p>
        <p>
        Tecnologias utilizadas:
        </p>
        <ul>
          {tecnology.map((tech, index) => (
            <li key={index}>
              <span>{tech}: </span>
              {descTec[index]}
            </li>
          ))}
        </ul>
      </Styled.TextContainer>
    </Styled.Container>
  )
}