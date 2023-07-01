import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  margin-top: -50px;
  margin-left: -50px;
  margin-right: -50px;

  height: 70px;
  box-shadow: 0px 0px 10px #000;
`

export const ListaLink = styled.ul`
  display: flex;
  flex-direction: row;

  margin-right: 100px;
  gap: 20px;
  font-size: 14px;

  z-index: 100;
`