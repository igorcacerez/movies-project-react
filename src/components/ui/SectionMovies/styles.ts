import styled from 'styled-components'

export const SectionStyle = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  position: relative;
  padding: 2rem;

  @media (max-width: 769px) {
    gap: 1.2rem;
    flex-wrap: nowrap;
    justify-content: initial;
    padding: 2rem;

    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;

    /* scroll-snap-type: x proximity; */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
