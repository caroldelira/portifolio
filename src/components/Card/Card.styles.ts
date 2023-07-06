import styled from "styled-components"

interface CardProps {
  color: 'blue' | 'green' | 'yellow' | 'pink' | 'orange'
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
  flex-direction: row;
  align-items: center;

  position: relative;

  width: 1000px;
  height: 430px;

  margin: 20px auto;

  border: 1px solid ${(({color}) => colors[color])};
  border-radius: 10px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 0 10px ${(({ color }) => colors[color])};
    background: rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;

    padding: 15px;

    margin: 20px auto;
  }
`
export const ImageContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    margin-botton: 10px;
    width: 100%;
  }
`

export const ImageCard = styled.div<CardProps>`
  width: 100%;
  padding: 20px;

  & img {
    width: 80%;
  }

  @media (max-width: 768px) {
    padding: 10px;

    & img {
      width: 80%;
    }
  }
`

export const imageLogos = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & img {
    width: 30px;
    height: auto;
    margin-left: 20px;

    transition: transform 0.8s ease;

    &:hover {
      transform: scale(1.3) rotate(360deg);
    }
  }

  @media (max-width: 768px) {

    & img {
      width: 15px;
      height: auto;
      margin-left: 10px;
    }
  }
`
export const TextContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 20px 30px;

  position: relative;

  & h4 {
    color: ${(({color}) => colors[color])};
    font-size: 24px;
  }

  & p {
    padding: 12px 0;
  }

  & ul {
    line-height: 20px;
  }

  & span {
    color: ${(({color}) => colors[color])};
  }
 
  @media (max-width: 768px) {
    padding: 15px 15px;
    width: 100%;

    h4 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
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
  color: ${(({color}) => colors[color])};
`
