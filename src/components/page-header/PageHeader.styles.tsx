import styled from 'styled-components';

export const PageHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/flag.jpg');
  background-size: cover;
  font-size: 18px;
  color: var(--color-background-2);

  h1 {
    font-weight: 700;
  }
`;
