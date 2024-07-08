import styled from 'styled-components';

export const MenuPageContainer = styled.div<{
  direction?: 'to-left' | 'to-right';
}>`
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

  .slide-enter {
    transform: ${({ direction }) =>
      direction === 'to-right' ? ' translateX(-100%)' : ' translateX(100%)'};
  }

  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 300ms ease-in-out;
  }

`;
