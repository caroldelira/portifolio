import styled from 'styled-components'


export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  
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
   /*  padding: 0 20px;
    height: 400px;
    background: rgba(36, 36, 36, 0.8);

    &img {
      width: 40px;
    } */

    display: none;
  }

`

export const ListaLink = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  gap: 20px;
  font-size: 14px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
/*     display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    padding: 10px; */
    display: none;
  }
`;