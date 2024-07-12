import styled from 'styled-components';

export const MenuPageContainer = styled.div<{
  direction?: 'to-left' | 'to-right';
}>`
  padding-top: 75px;
  height: 100%;
  background-color: var(--color-background-2);

  .sizes {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    div {
      flex: 1;
    }
  }

  .page-header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/flag.jpg');
    background-size: cover;
    font-size: 18px;

    h1 {
      font-family: Andika;
      font-weight: 300;
    }
  }

  .page-content {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 16px;

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
  }
`;
