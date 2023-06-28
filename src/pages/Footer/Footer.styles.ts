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
`
