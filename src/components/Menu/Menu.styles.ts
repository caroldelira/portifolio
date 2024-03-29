import styled from 'styled-components'

interface MenuProps {
  mobileMenu: boolean;
}


export const Container = styled.div`

`

export const ListaLink = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  margin-top: 35px;
  gap: 20px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    transition: color 0.6s; ease-in-out;
    margin-top: 20px;
    padding: 6px 16px;

    :hover {
      color: var(--blue); 
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0px;
    margin-top: 25px;
    gap: 0px;

    a {
      display: flex;
      font-size: 14px;
      justify-content: center;
    }
    
    display: ${({mobileMenu}) => mobileMenu ? 'flex' : 'none' };
  }
`;

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