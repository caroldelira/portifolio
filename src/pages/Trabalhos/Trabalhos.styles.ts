import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`
export const BG = styled.img`
  margin: -300px;
`

export const H3 = styled.h3`
  text-align: center;
  font-size: 40px;
  background-image: var(--linear-pink);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;
`
export const H3S = styled.h3`
  text-align: center;
  font-size: 40px;
  background-image: var(--linear-yellow);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;
`
export const Content = styled.div`
  width: 1200px;
  margin-top: 20px;



  position: absolute;
`