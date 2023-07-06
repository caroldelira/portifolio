import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  p {
    color: var(--gray-500);
    font-size: 14px;
  }

 @media (max-width: 320px) {
   margin-top: 10px;

   p {
    font-size: 12px;
   }
  }
`

export const Contatos = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  
  img {
    width: 100%;
    padding: 10px;

    transition: transform 0.1s ease;

    &:hover {
      transform: scale(1.3);
    }
  }

 @media (max-width: 320px) {
   img {
    width: 80%;
    padding: 6px;
   }
  }
`

export const ButtonUp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: -80px;

 @media (max-width: 320px) {
    margin-top: 10px;
    justify-content: center;
  }
`
export const IMG = styled.div`
 @media (max-width: 320px) {
   max-width: 1200px;

   img {
    width: 500px;
   }
  }
`