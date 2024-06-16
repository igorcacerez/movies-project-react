import styled from 'styled-components'

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 2rem;
  margin-top: 5rem;
  background-color: ${(props) => props.theme.light};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 426px) {
    flex-direction: column;
    text-align: center;
  }

  p {
    font-size: 0.83rem;
  }
`
