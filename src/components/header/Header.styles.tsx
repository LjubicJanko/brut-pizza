import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: var(--e-global-color-header-background);

  padding-top: 2rem;
  padding-bottom: 2rem;

  .brut-logo {
    position: absolute;
    top: 1rem;
    width: 150px;
    @media (max-width: 767px) {
      width: 111px;
    }
  }

  .hamburger-menu {
    position: absolute;
    right: 1rem;
    button {
      margin: 0;
    }
  }
`;
