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
    justify-content: flex-start;
    padding: 2rem 0;
    margin: 0 0 0 2rem;
    width: calc(100% - 2rem);

    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;

    scroll-snap-type: x proximity;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &:last-of-type {
      padding-right: 2rem;
    }
  }
`
