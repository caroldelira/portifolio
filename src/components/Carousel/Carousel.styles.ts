import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & button {
      display: none;
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  transition: transform 0.5s ease-in-out;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;