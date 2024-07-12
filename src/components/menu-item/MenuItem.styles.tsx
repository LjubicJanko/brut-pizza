import styled, { css } from 'styled-components';

const nameStyle = css`
  .name {
    text-align: left;
    width: fit-content;
    max-width: 80%;
    font-size: 18px;
    color: var(--color-green);
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  img {
    border-radius: 15%;
  }

  &.action {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    ${nameStyle};
    .name {
      width: 100%;
      font-size: 28px;
      text-align: center;
    }
    .old-price {
      text-decoration: line-through;
      margin-right: 8px;
      color: var(--color-red);
    }
    .price {
      font-size: 32px;
    }
    .action-divider {
      margin-top: 32px;
    }
  }
  .name-and-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    ${nameStyle};

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
      text-align: right;
      font-size: 16px;
      white-space: nowrap;
      color: var(--color-red);
    }
  }

  .ingredients {
    font-size: 12px;
    color: var(--color-white);
    text-align: left;
  }
`;
