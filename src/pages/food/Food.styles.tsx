import styled from 'styled-components';

export const FoodPageContainer = styled.div`
  padding: 16px;
  padding-top: 75px;
  height: 100%;
  background-color: var(--color-background-2);

  display: flex;
  flex-direction: column;
  gap: 48px;

  .divider {
    background: var(--color-white);
    position: relative;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--color-green) 0%,
      var(--color-green) 33%,
      var(--color-white) 33%,
      var(--color-white) 66%,
      var(--color-red) 66%,
      var(--color-red) 100%
    );
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;
