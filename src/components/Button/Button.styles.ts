import styled from "styled-components";

interface ButtonProps {
  variant: 'text' | 'default';
}

const variantCss = {
  text: `
    border: none;
    
    transition: color 0.5s ease-out;

     &:disabled {
      filter: brightness(70%);
      cursor: not-allowed;
      pointer-events: none;
    }

    &:not(:disabled):hover {
      color: var(--blue);
      cursor: pointer;

      & img {
        filter: brightness(1.75);
      }
    }
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

  height: 100%;
  
  padding: 0px 10px;
  margin-top: 20px;

  ${({ variant }) => variantCss[variant]}
  
  @media only screen and (max-width: 768px) {

    margin-top: 10px;
    font-size: 14px;
  }
`