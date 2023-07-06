import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  position: relative;

  @media only screen and (max-width: 768px) {
   min-height: 2680px;
   margin-top: 20px;
  }
`
export const BG = styled.div`

  @media only screen and (max-width: 768px) {
      display: none;
    }
`

export const H3 = styled.h3`
  text-align: center;
  font-size: 35px;
  background-image: var(--linear-pink);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  @media only screen and (max-width: 768px) {
   font-size: 20px;
   margin-bottom: 20px;
  }
`
export const H3S = styled.h3`
  text-align: center;
  font-size: 35px;
  background-image: var(--linear-yellow);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  margin-top: 40px;

  @media only screen and (max-width: 768px) {
   font-size: 20px;
   margin-bottom: 20px;
  }
`
export const Content = styled.div`
  max-width: 1200px;
  margin-top: 20px;

  position: absolute;
`