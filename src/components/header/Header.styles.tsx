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

  height: 75px;

  .brut-logo {
    position: absolute;
    top: 25px;
    display: flex;
    width: 150px;
    border-radius: 50%;
    @media (max-width: 767px) {
      width: 111px;
    }
  }
`;

export const HamburgerMenu = styled.div`
  width: 100%;
  background-color: var(--e-global-color-header-background);

  .hamburger-menu {
    &__button {
      position: absolute;
      right: 10px;
      top: 10px;
      margin: 0;
    }

    &__content {
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      overflow: hidden;
      max-height: 0;
      opacity: 0;

      &--hidden {
        max-height: 0;
        opacity: 0;
      }
      &--visible {
        max-height: 300px;
        opacity: 1;
      }

      &__list {
        list-style-type: none;
        padding: 0;
        padding-top: 75px;
        margin: 0;
        margin-bottom: 8px;

        li {
          width: 100%;
          color: white;
          border-bottom: 1px solid #57081d;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        &__item {
          &--selected {
            background-color: var(--color-green);
          }

          &--link {
            display: flex;
            justify-content: center;
            width: 100%;
            text-decoration: none;
            font-size: 18px;
            line-height: 25px;
            color: var(--color-white);
            background: linear-gradient(
              60deg,
              var(--color-green),
              var(--color-white),
              var(--color-red)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        }

        .flag {
          &--selected {
            position: relative;
            display: inline-block;
            padding: 1px;
            border: 2px solid var(--color-green);
          }
        }
      }
    }
  }

  .MuiSvgIcon-root {
    color: white;
  }
`;
