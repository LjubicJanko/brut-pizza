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
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  .front-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 8px;
  }

  .check-offer-btn {
    /* border: 1px solid white; */
    font-size: 16px;
    color: var(--color-white);
    border-color: var(--color-white);
  }
`;
