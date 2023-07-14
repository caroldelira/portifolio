import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  height: 1600px;

  @media only screen and (max-width: 768px) {
   height: 100%;
   margin-top: 20px;

   #imgPage {
     display: none;
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
  
  margin-top: 100px;
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
  height: 730px;
  margin-top: 40px;

  position: absolute;

  @media only screen and (max-width: 768px) {
    position: relative;
  }
`
export const ContentDes = styled.div`
  width: 100%;
  margin-top: 750px;
  
  position: absolute;

  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 500px;
  }
`