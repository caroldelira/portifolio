import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;


export const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;