import styled from 'styled-components'

export const BannerStyle = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    width: 70%;
    height: 90vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${(props) => props.theme.light};
    display: block;
    content: ' ';
    z-index: -1;
  }

  @media (max-width: 426px) {
    height: auto;
    align-items: end;
    padding-top: 3rem;
    padding-bottom: 3rem;

    &::after {
      width: 100vw;
      height: 100vh;
      right: auto;
      background: ${(props) =>
        `linear-gradient(17deg, ${props.theme.white}, ${props.theme.light})`};
    }
  }
`
export const TextosStyle = styled.div`
  flex: 1;

  h1,
  h2 {
    font-family: ${(props) => props.theme['font-title']}, sans-serif;
  }

  h2 {
    color: ${(props) => props.theme.title};
    font-size: 2.3rem;

    @media (max-width: 769px) {
      font-size: 2rem;
    }
  }

  h1 {
    font-size: 4rem;
    background: ${(props) =>
      `-webkit-linear-gradient(180deg, ${props.theme.blue}, ${props.theme.primary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 1rem;

    @media (max-width: 769px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.gray};

    @media (max-width: 769px) {
      font-size: 0.9rem;
    }
  }
`
export const ImagemStyle = styled.div`
  flex: 1;
  text-align: right;

  img {
    width: 30rem;
    max-height: 100%;

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0 0 5px ${(props) => props.theme.gray});
    }
  }

  @media (max-width: 426px) {
    display: none;
  }
`
