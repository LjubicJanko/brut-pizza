import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: var(--e-global-color-header-background);

  padding-top: 2rem;
  padding-bottom: 2rem;

  .brut-logo {
    display: flex;
    width: 150px;
    @media (max-width: 767px) {
      width: 111px;
    }
  }

  .hamburger-menu {
    width: 100%;
    &__button {
      position: absolute;
      right: 1rem;
      top: 1rem;
      margin: 0;
    }

    &__content {
      &__list {
        list-style-type: none;
        padding: 0;

        li {
          width: 100%;
          color: white;
          border-bottom: 1px solid #57081d;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        &__item {
          &--link {
            text-decoration: none;
            font-size: 18px;
            line-height: 25px;
            color: var(--color-white);
          }
        }
      }
      &--hidden {
        display: none;
      }
    }

    .MuiSvgIcon-root {
      color: white;
    }
  }
`;
