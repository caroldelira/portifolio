import styled from "styled-components"

interface CardProps {
  color: 'blue' | 'green' | 'yellow' | 'pink' | 'orange';
  design?: boolean;
}

const colors = {
  blue: 'var(--blue)',
  green: 'var(--green)',
  yellow: 'var(--yellow)',
  pink: 'var(--pink)',
  orange: 'var(--orange)'
}


export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  width: 480px;
  height: ${(() => `design ? 550px : 630px`)};
  padding: 16px;

  margin: 10px;

  border: 1px solid ${(({color}) => colors[color])};
  border-radius: 10px;

  transition: box-shadow 0.5s ease;
  transition: transform 0.8s ease;

  &:hover {
    box-shadow: 0 0 10px ${(({ color }) => colors[color])};
    background: rgba(0, 0, 0, 0.07);
    transform: scale(1.01);
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 380px;
  }
`
export const ImageContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`

export const ImageCard = styled.div<CardProps>`
  display: flex;
  justify-content: center;

  & img {
    width: 100%;
  }
`

export const imageLogos = styled.div<CardProps>`
  display: flex;
  margin-top: 16px;

  & img {
    width: 30px;
    height: auto;
    margin-left: 20px;

    transition: transform 0.8s ease;

    &:hover {
      transform: scale(1.3) rotate(360deg);
    }
  }

  @media only screen and (max-width: 768px) {
    
    & img {
      width: 20px;
      height: auto;
      margin-left: 10px;
    }
  }
`
export const TextContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 20px 0px;

  position: relative;

  & h4 {
    color: ${(({color}) => colors[color])};
    font-size: 20px;
  }

  & p {
    padding: 10px 0;
    font-size: 14px;
  }

  & ul {
    line-height: 18px;
    font-size: 14px;
    list-style: none;
  }

  & span {
    color: ${(({ color }) => colors[color])};
    font-size: 16px;
    font-weight: bold;
  }
 
  @media only screen and (max-width: 768px) {
    padding: 4px 2px;
    width: 100%;

    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
    ul {
      line-height: 18px;
    }
  }
`
export const Link = styled.a<CardProps>`
  text-decoration: none;
  color: ${(({ color }) => colors[color])};
  
  &:hover {
    text-decoration: underline;
  }
`

export const li = styled.li<CardProps>`
  list-style: none;
  color: ${(({color}) => colors[color])};
`
