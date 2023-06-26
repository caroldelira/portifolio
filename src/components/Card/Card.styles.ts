import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;

  width: 1100px;
  height: 500px;

  margin: 80px auto;

  border: 1px solid var(--green);
  border-radius: 10px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
`

export const ImageCard = styled.div`
  width: 100%;
  padding: 20px;

  & img {
    width: 100%;
  }
`

export const imageLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & img {
    width: 30px;
    height: auto;
    margin-left: 20px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 40px 30px;

  position: relative;

  & h4 {
    color: var(--green);
    font-size: 24px;
  }

  & p {
    padding: 16px 0;
  }

  & ul {
    line-height: 20px;
  }

  & span {
    color: var(--green);
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: var(--green);
`

export const P = styled.p`
  
`
