import styled from 'styled-components';

export const MenuCategoryContainer = styled.div`
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

  .section-subtitle {
    font-size: 18px;
    color: var(--color-white);
  }

  .section-additions-item {
    gap: unset;
  }
`;
