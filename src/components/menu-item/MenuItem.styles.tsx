import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  img {
    border-radius: 15%;
  }

  .name-and-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .name {
      max-width: 80%;
      font-size: 18px;
      color: var(--color-green);
    }
    .separator {
      border-bottom-style: dashed;
      border-bottom-width: 2px;
      border-bottom-color: var(--color-white);
      margin-left: 16px;
      margin-right: 16px;
      flex-grow: 1;
      height: 0;
    }
    .price {
      font-size: 16px;
      color: var(--color-red);
    }
  }

  .ingredients {
    font-size: 12px;
    color: var(--color-white);
    text-align: left;
  }

  /* border: 1px solid var(--color-white); */
`;
