import styled from 'styled-components'

export const SectionStyle = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;

  @media (max-width: 769px) {
    gap: 1.2rem;
    flex-wrap: nowrap;
    justify-content: flex-start;

    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;

    scroll-snap-type: x proximity;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
