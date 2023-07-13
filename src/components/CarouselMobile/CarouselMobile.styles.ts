import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    display: none;
  }
 
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;