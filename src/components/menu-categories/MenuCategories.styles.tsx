import styled from 'styled-components';

export const MenuCategoriesContainer = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 600;
    color: var(--color-white);
    letter-spacing: 2px;
    margin: 20px 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    white-space: pre-wrap;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 18px;
      font-weight: 400;
      color: var(--e-global-color-text);
      text-transform: none;
      letter-spacing: normal;
    }
  }

  .menu-categories {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-wrap: wrap;
      padding-top: 115px;
    }

    img {
      max-width: 300px;
      max-height: 200px;
      display: block;
    }

    .front-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 8px;

      .title {
        font-size: 22px;
      }
    }

    .check-offer-btn {
      font-size: 16px;
      color: var(--color-white);
      border-color: var(--color-white);

      font-family: 'Alegreya', serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    }
  }
`;
