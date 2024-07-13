import styled from 'styled-components';

export const MenuCategoriesContainer = styled.div`
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
`;
