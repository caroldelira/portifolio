import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-height: 630px;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  img {
    max-width: 130%;
  }

  @media only screen and (max-width: 768px) { 
    width: 100%;

    img {
      width: 100%;
    }
  }
 `
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 450px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: -60px;
  }
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 60px;
  /* Primeiro passo: definir um degradê como fundo */
  background-image: var(--linear-blue);
  
  /* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

  /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
  -webkit-text-fill-color: transparent;

  /* Cor que contraste com o degradê, caso o navegador não suporte "background-clip: text" */
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 45px;
  }
`

export const H2Pink = styled.h2`
  text-align: center;
  font-size: 40px;
  font-family: 'Ubuntu';
  font-weight: 300;
  background-image: var(--linear-pink);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const H2Yellow = styled.h2`
  text-align: center;
  font-size: 40px;
  font-family: 'Ubuntu';
  font-weight: 300;
  background-image: var(--linear-yellow);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`

export const ArrowUp = styled.img`
  width: 4px;
  height: 106px;
  margin: 0 auto;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    width: 2px;
    height: 53px;
    margin: 0 auto;
    margin-top: 10px;
  }
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`