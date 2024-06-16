import styled from 'styled-components'

interface BannerStyleProps {
  capa?: string
}

export const BannerStyle = styled.div<BannerStyleProps>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      327deg,
      rgba(255, 255, 255, 1) 27%,
      rgba(253, 187, 45, 0) 111%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 1) 1%, rgba(253, 187, 45, 0) 40%);

  &::after {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: ${(props) =>
      props.capa ? 'url(' + props.capa + ')' : props.theme.light};
    background-position: center center;
    background-size: cover;

    z-index: -1;
  }

  @media (max-width: 426px) {
    flex-direction: column;
  }
`

export const TextosStyle = styled.div`
  flex: 1;
  padding-top: 10rem;

  @media (max-width: 769px) {
    padding: 0;
  }

  h2,
  h1 {
    font-family: ${(props) => props.theme['font-title']}, sans-serif;
  }

  h2 {
    color: ${(props) => props.theme.title};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    max-width: 480px;

    @media (max-width: 769px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    font-size: 6rem;
    line-height: 6rem;
    padding: 1rem 0 2rem;
    color: ${(props) => props.theme.title};

    background: ${(props) =>
      `-webkit-linear-gradient(180deg, ${props.theme.blue}, ${props.theme.primary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 769px) {
      font-size: 4rem;
      line-height: 4rem;
    }

    @media (max-width: 375px) {
      font-size: 3.3rem;
      line-height: 3rem;
      padding-bottom: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-500']};

    @media (max-width: 769px) {
      font-size: 1rem;
    }
  }
`

export const ImagemStyle = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 6rem;

  img {
    max-height: 90vh;

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0 0 5px ${(props) => props.theme.gray});
    }
  }

  @media (max-width: 769px) {
    padding: 0;

    img {
      max-height: 70vh;
    }
  }

  @media (max-width: 426px) {
    img {
      max-height: 300px;
      margin: 2rem 0;
    }
  }
`
