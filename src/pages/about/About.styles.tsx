import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  padding: 16px;
  padding-top: 75px;
  height: 100%;
  background-color: var(--color-background-2);

  display: flex;
  flex-direction: column;
  color: var(--color-white);

  .page-header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/flag.jpg');
    background-size: cover;
    font-size: 18px;
    color: var(--color-background-2);
  }

  .address {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .address-label {
      font-size: 22px;
    }
    .address-name {
      font-size: 18px;
    }
  }
`;
