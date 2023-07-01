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
`

export const ListaLink = styled.ul`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  gap: 20px;
  font-size: 14px;
`