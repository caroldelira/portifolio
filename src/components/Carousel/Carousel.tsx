import React, { ReactNode, useEffect, useState } from 'react';

import buttonDown from '../../image/carouselDown.svg';
import buttonUp from '../../image/caroulseUp.svg';

import { CardProps } from '../../models/projetosDev';
import { Card } from '../Card';

import * as Styled from './Carousel.styles';
import { Button } from '../Button';

export interface CarouselProps {
  projects: CardProps[];
  children?: ReactNode;
}

export function Carousel({projects}: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);
  const [isReversed, setIsReversed] = useState(false);

  const totalCards = projects.length;

  useEffect(() => {
     if (endIndex === totalCards) {
     setIsReversed(true)
  } else if (startIndex === 0) {
    setIsReversed(false)
   }
  },[startIndex, endIndex])

  console.log(totalCards, 'total cards');
  console.log(startIndex, 'start');
  console.log(endIndex, 'end');

  const handleNext = () => {
    if (endIndex < totalCards) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    } 
  };
  console.log(handleNext, 'next')

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    } 
  };

    console.log(handlePrev, 'Prev')
  return (
    <Styled.Container>
      <Styled.ContainerCards>
        <Styled.CarouselItem>
          {projects.slice(startIndex, endIndex).map((card, index) => (
            <Card
              key={index}
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
        </Styled.CarouselItem>
      </Styled.ContainerCards>

      <Button variant="text" onClick={isReversed ? handlePrev : handleNext}>
        <img src={isReversed ? buttonUp : buttonDown} alt="" />
      </Button>
    </Styled.Container>
  );
}