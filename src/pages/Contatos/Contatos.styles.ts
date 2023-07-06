import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  p {
    font-size: 23px;
  }
 @media (max-width: 320px) {
    margin-top: 50px;

    p {
      font-size: 20px;
    }
  }
`

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

 @media (max-width: 320px) {
  margin: 10px
  }
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

 @media (max-width: 320px) {

  margin: 15px 15px;

  span {
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
  }

  img {
    width: 40px;
    margin: 0 auto;
  }
}
`