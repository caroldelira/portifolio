import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

   & button {
    margin-top: -60px;
  }
  
`;

export const ContainerCards = styled.div`
  display: flex;
  overflow: hidden;
`;

export const CarouselItem = styled.div`
  width: 50%;
  transition: transform 0.5s ease-in-out;
`;