import { useMemo, useState } from 'react';
import * as Styled from './Header.styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';

const Header = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { changeLanguage } = useChangeLanguage();

  const menuItems = useMemo(
    () => [
      {
        to: PATH.HOME,
        title: t('home'),
        isSelected: false,
      },
      {
        to: PATH.MENU,
        title: t('menu'),
        isSelected: false,
      },
      {
        to: PATH.ABOUT,
        title: t('about'),
        isSelected: false,
      },
    ],
    [t]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Styled.HeaderContainer>
        <img
          className="brut-logo"
          src={'brut.jpg'}
          alt="brut-logo"
          loading="lazy"
        />
      </Styled.HeaderContainer>
      <Styled.HamburgerMenu className="hamburger-menu">
        <IconButton
          size="large"
          aria-label="menu"
          className="hamburger-menu__button"
          onClick={() => setIsMenuOpen((old) => !old)}
        >
          <MenuIcon className="hamburger-icon" />
        </IconButton>
        <div
          className={classNames('hamburger-menu__content', {
            'hamburger-menu__content--hidden': !isMenuOpen,
            'hamburger-menu__content--visible': isMenuOpen,
          })}
        >
          <ul className="hamburger-menu__content__list">
            {menuItems.map((item, index) => (
              <li key={index} className="hamburger-menu__content__list__item">
                <Link
                  to={item.to}
                  className="hamburger-menu__content__list__item--link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <img
                onClick={() => changeLanguage('en')}
                className="en-flag"
                src="assets/en.png"
                alt="english"
              />
            </li>
            <li>
              <img
                onClick={() => changeLanguage('rs')}
                className="rs-flag"
                src="assets/rs.png"
                alt="serbian"
              />
            </li>
          </ul>
        </div>
      </Styled.HamburgerMenu>
    </div>
  );
};

export default Header;
