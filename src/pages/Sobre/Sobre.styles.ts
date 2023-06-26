import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
`

export const H3 = styled.h3`
  text-align: center;
  font-size: 40px;
  background-image: var(--linear-blue);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;
`

export const Content = styled.div`
  width: 1200px;
  margin-top: 20px;

  p {
    margin: 40px 0;
    line-height: 22px;
    font-size: 18px;
    font-weight: 300;
    padding: 0 75px;
    text-align: center;
  }
`