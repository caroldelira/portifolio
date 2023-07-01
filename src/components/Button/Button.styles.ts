import styled from "styled-components";

interface ButtonProps {
  variant: 'text' | 'default';
}

const variantCss = {
  text: `
    border: none;

    transition: color 0.5s ease-out;

    &:hover{
    color: var(--blue);
    cursor: pointer;
  }
  `,
  default: `
    border: 2px solid var(--pink);
    border-radius: 10px;

    transition: background 0.5s ease-out;

    &:hover{
      background: var(--pink);
      cursor: pointer;
    }
  `
}

export const Button = styled.button<ButtonProps>`
  color: var(--white);
  font-weight: bold;
  background: transparent;
  
  padding: 10px;
  margin-top: 20px;

  ${({variant}) => variantCss[variant]}
`