import styled from "styled-components";

export const Button = styled.button`
  color: var(--white);
  font-weight: bold;
  background: transparent;

  border: 2px solid var(--pink);
  border-radius: 10px;
  
  padding: 10px;
  margin-top: 20px;

  transition: background 0.5s ease-out;

  &:hover{
    background: var(--pink);
  }
`