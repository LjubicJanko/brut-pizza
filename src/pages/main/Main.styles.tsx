import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  background-color: var(--color-background-2);
  color: var(--color-white);
  padding: 75px 16px 50px 16px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 767px) {
    padding-top: 115px;
  }
`;
