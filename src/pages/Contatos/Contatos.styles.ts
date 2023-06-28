import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 23px;
  }
`

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

export const RedeSocial = styled.a`
  display: flex;
  flex-direction: column;
  width: 120px;
  margin: 0 30px;
  color: var(--white);
  z-index: 100;
  text-decoration: none;

  span {
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
  }

  img {
    width: 70px;
    margin: 0 auto;
  }
`