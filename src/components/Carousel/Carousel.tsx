import React, { ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

import { Card } from '../Card';
import { CardProps } from '../Card/Card';

import * as Styled from './Carousel.styles';

export interface CarouselProps {
  projects: CardProps[];
  children?: ReactNode;
  id?: string;
}

export function Carousel({ projects, id }: CarouselProps) {
  
  return (
    <Styled.Container >
      <Swiper
        id={id}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
    >
      <Styled.ContainerCards>
          {projects.map((card, index) => (
          <SwiperSlide key={index}>
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
            </SwiperSlide>
        ))}
      </Styled.ContainerCards>
      </Swiper>
      </Styled.Container>
  );
}
