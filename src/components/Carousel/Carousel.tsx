import React, { ReactNode, useState } from 'react';

import buttonRight from '../../image/carouselRight.svg';
import buttonLeft from '../../image/caroulseLeft.svg';

import { Button } from '../Button/Button';

import { Card } from '../Card';
import { CardProps } from '../Card/Card';

import * as Styled from './Carousel.styles';

export interface CarouselProps {
  projects: CardProps[];
  children?: ReactNode;
}

export function Carousel({ projects }: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const totalCards = projects.length;

  const handleNext = () => {
    if (endIndex < totalCards) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  return (
    <Styled.Container>
      <Button variant="text" onClick={handlePrev} disabled={startIndex === 0}>
        <img src={buttonLeft} alt="" />
      </Button>
      <Styled.ContainerCards>
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
            tecnology={card.tecnology}
            titulo={card.titulo}
            buttonLink={card.buttonLink}
          />
        ))}
      </Styled.ContainerCards>

      <Button
        variant="text"
        onClick={handleNext}
        disabled={endIndex === totalCards}
      >
        <img src={buttonRight} alt="" />
      </Button>
    </Styled.Container>
  );
}
