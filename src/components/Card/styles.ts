import styled from 'styled-components'

interface CardStyleProps {
  bg: string
  blur: boolean
}

// A altura da imagem é 1/3 maior que a largura
// Esta func retorna o valor da altura, recebendo a largura
const getHeightCard = (width: number) => width + width * 0.3

export const DivTextosStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['gray-500']};
  position: absolute;
  z-index: 3;
  bottom: -100%;
  left: 0;
  padding: 1.4rem;
  border-radius: 18px 18px 0 0;
  transition: all 0.5s;
  cursor: pointer;

  h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.primary};
  }

  p {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    color: ${(props) => props.theme['gray-light']};
  }
`

export const CardStyle = styled.div<CardStyleProps>`
  width: 300px;
  height: ${getHeightCard(300) + 'px'};
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  border-radius: 18px;
  position: relative;
  overflow: hidden;

  scroll-snap-align: start;

  ${(props) => !props.blur && 'filter: blur(0.4rem);'}

  &::after {
    border-radius: 18px;
    content: ' ';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.dark};
    position: absolute;
    z-index: 2;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    box-shadow: 4px 6px 12px 0px #1f1e1eba;
    &::after {
      opacity: 0.4;
    }

    ${DivTextosStyle} {
      bottom: 0;
      box-shadow: 0px 0px 5px #9d9d9d;
    }
  }

  @media (max-width: 769px) {
    width: 250px;
    height: ${getHeightCard(250) + 'px'};
  }

  @media (max-width: 320px) {
    width: 210px;
    height: ${getHeightCard(210) + 'px'};
  }
`
