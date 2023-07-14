import styled, { keyframes } from 'styled-components'

interface MenuProps {
  mobileMenu: boolean;
}

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Container = styled.div<MenuProps>`
    animation-duration: 0.3s;
    animation-timing-function: ease;

    &.isOpen {
      animation-name: ${slideDownAnimation};
    }

    &:not(.isOpen) {
      animation-name: ${slideUpAnimation};
    }

`

export const ListaLink = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  margin-top: 35px;
  gap: 20px;
  font-size: 14px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0px;
    margin-top: 25px;
    gap: 10px;
    display: ${({mobileMenu}) => mobileMenu ? 'flex' : 'none' }
  }
`

export const MenuIcon = styled.div<MenuProps>`
  display: none;

  @media only screen and (max-width: 768px) {
    display: ${({ mobileMenu }) => mobileMenu ? 'flex' : 'none' };
    flex-direction: column;
    align-items: flex-end;

    img {
      height: 38px;
      cursor: pointer;
      width: 100%;
    }
  
  
}
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;


  img {
    width: 90px;
    margin-left: 50px;
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top: 0px;
      width: 0px;
    }
  }

   @media only screen and (max-width: 768px) {
   flex-direction: column;
   bottom: 0;
  }
`