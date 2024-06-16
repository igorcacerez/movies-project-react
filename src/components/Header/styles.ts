import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 0;

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      color: ${(props) => props.theme.gray};
      font-weight: normal;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &.active {
        color: ${(props) => props.theme.primary};
        font-weight: bold;
      }

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.primary};
      }
    }
  }

  @media (max-width: 426px) {
    padding: 2rem 0;
    flex-direction: column;
    gap: 2rem;
  }
`
