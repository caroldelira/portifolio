import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H3 = styled.h3`
  text-align: center;
  font-size: 35px;
  background-image: var(--linear-blue);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  @media (max-width: 768px) {
   font-size: 20px;
  }
`

export const Content = styled.div`
  max-width: 1200px;
  margin-top: 20px;

  p {
    margin: 40px 0;
    line-height: 22px;
    font-size: 18px;
    font-weight: 300;
    padding: 0 75px;
    text-align: center;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;

    p {
      margin: 20px 0;
      line-height: 14px;
      font-size: 12px;
      font-weight: 300;
      padding: 0 25px;
      text-align: center;
      letter-spacing: 1px;
    }
  }
`

export const IMG = styled.div`
 @media (max-width: 768px) {
   max-width: 1200px;

   img {
    width: 500px;
   }
  }
`