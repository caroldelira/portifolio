import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 1680px;

  @media only screen and (max-width: 768px) {
   height: 100%;
   margin-top: 20px;

   #imgPage {
     width: 100%;
     position: absolute;
   }
  }
`

export const H3 = styled.h3`
  text-align: center;
  font-size: 35px;
  
  margin-bottom: 40px;
  
  background-image: var(--linear-pink);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;

  @media only screen and (max-width: 768px) {
   font-size: 26px;
  }
`
export const H3S = styled.h3`
  text-align: center;
  font-size: 35px;
  
  margin-bottom: 40px;
  
  background-image: var(--linear-yellow);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
  color: black;


  @media only screen and (max-width: 768px) {
   font-size: 26px;
  }
`
export const ContentDev = styled.div`
  width: 100%;
  height: 130%;
  margin-top: 40px;

  position: absolute;

  @media only screen and (max-width: 768px) {
  position: relative;
  }
`
export const ContentDes = styled.div`
  width: 100%;
  height: 840px;
  margin-top: 900px;
  
  position: absolute;

  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 80px;
    height: 100%;
  }
`