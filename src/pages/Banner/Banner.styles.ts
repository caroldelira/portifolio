import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 650px;
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
 `
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 450px;
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 70px;
  /* Primeiro passo: definir um degradê como fundo */
  background-image: var(--linear-blue);
  
  /* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

  /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
  -webkit-text-fill-color: transparent;

  /* Cor que contraste com o degradê, caso o navegador não suporte "background-clip: text" */
  color: black;
`

export const H2Pink = styled.h2`
  text-align: center;
  font-size: 45px;
  font-family: 'Ubuntu';
  font-weight: 300;
  background-image: var(--linear-pink);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;
`
export const H2Yellow = styled.h2`
  text-align: center;
  font-size: 45px;
  font-family: 'Ubuntu';
  font-weight: 300;
  background-image: var(--linear-yellow);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;
`

export const ArrowUp = styled.img`
  width: 4px;
  height: 106px;
  margin: 0 auto;
  margin-top: 20px;
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
`