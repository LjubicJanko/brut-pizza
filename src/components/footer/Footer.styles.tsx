import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  padding-bottom: 16px;
  background-color: var(--color-background-1);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 8px;
  }

  /* .contact-phone {
    display: flex;
    align-items: center;
    background-color: var(--color-red);
    border-radius: 5px;
    padding: 8px;
    gap: 8px;

    a {
      text-decoration: none;
      color: var(--color-white);
    }
  } */
`;
