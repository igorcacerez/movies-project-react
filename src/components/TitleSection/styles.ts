import styled from 'styled-components'

export const TitleSectionStyle = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 5rem 0 2rem;

  &::after {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['gray-light']};
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 426px) {
    margin: 2.5rem 0 1.8rem;
  }
`

export const TitleStyle = styled.h4`
  font-family: ${(props) => props.theme['font-title']}, sans-serif;
  color: ${(props) => props.theme.title};
  font-size: 2.3rem;
  background-color: ${(props) => props.theme.white};
  padding: 0 1rem 0 0;

  @media (max-width: 426px) {
    font-size: 1.8rem;
  }
`

export const LinkStyle = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.white};
  padding: 0 0 0 1rem;
  font-weight: 200;

  @media (max-width: 426px) {
    display: none;
  }
`
