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

  width: 1100px;
  height: 450px;

  margin: 80px auto;

  border: 1px solid ${(({color}) => colors[color])};
  border-radius: 10px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 0 10px ${(({ color }) => colors[color])};
    background: rgba(0, 0, 0, 0.07);
  }
`
export const ImageContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 50%;
  position: relative;
`

export const ImageCard = styled.div<CardProps>`
  width: 100%;
  padding: 20px;

  & img {
    width: 80%;
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
`
export const TextContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 40px 30px;

  position: relative;

  & h4 {
    color: ${(({color}) => colors[color])};
    font-size: 24px;
  }

  & p {
    padding: 16px 0;
  }

  & ul {
    line-height: 20px;
  }

  & span {
    color: ${(({color}) => colors[color])};
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
