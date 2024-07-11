import styled from 'styled-components';

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-red);
  border-radius: 5px;
  padding: 8px;
  gap: 8px;

  .phone-link {
    display: flex;
    gap: 4px;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }
`;
