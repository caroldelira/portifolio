import styled from 'styled-components'

interface MenuProps {
  mobileMenu: boolean;
}


export const Container = styled.nav<MenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  padding-bottom: 20px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: rgba(36, 36, 36, 0.7);

  height: 70px;
  box-shadow: 0px 0px 10px #000;

  backdrop-filter: blur(15px);

  z-index: 1000;

  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: ${({ mobileMenu }) => mobileMenu ? '300px' : '70px' };
    padding-bottom: 0px;
    margin-top: ${({ mobileMenu }) => mobileMenu ? '-50px' : '0px' };
  }
`

export const ListaLink = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  gap: 20px;
  font-size: 14px;
`

export const MenuIcon = styled.div<MenuProps>`
  display: none;

  @media only screen and (max-width: 768px) {
    display: ${({ mobileMenu }) => mobileMenu ? 'none' : 'flex' };
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    img {
      height: 38px;
      cursor: pointer;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  img {
    width: 90px;
    margin-left: 50px;
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
      width: 90px;
      margin-left: 0px;
      margin-top: 0px;
      width: 100%;
    }
  }

  #logo {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

`