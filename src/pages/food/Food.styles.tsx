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

  .section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-height: 300px;
    color: var(--color-white);

    .section-items {
      display: flex;
      flex-direction: column;
      gap: 32px;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
      @media (min-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    .section-title {
      font-size: 22px;
      color: var(--color-white);
    }
  }

  .drinks {
    .section-items {
      gap: 8px;
    }
  }
`;
