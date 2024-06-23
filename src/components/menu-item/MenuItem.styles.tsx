import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  border: 1px solid black;

  overflow: hidden;

  .meal-image {
    width: 70%;
  }

  .meal-ingredients {
    font-size: 14px;
  }
`;
