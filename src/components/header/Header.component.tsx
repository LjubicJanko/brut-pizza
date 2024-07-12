import { useMemo, useRef, useState } from 'react';
import * as Styled from './Header.styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../../routes';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';
import { useLocation } from 'react-router-dom';
import useClickListener from '../../hooks/useClickListener';

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const hamburgerMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { changeLanguage, selectedLanguage } = useChangeLanguage();

  useClickListener<HTMLDivElement>(
    hamburgerMenuRef,
    () => setIsMenuOpen(false),
    isMenuOpen
  );

  const menuItems = useMemo(
    () => [
      {
        to: PATH.HOME,
        title: t('home'),
        isSelected: PATH.HOME === pathname,
      },
      {
        to: PATH.MENU,
        title: t('menu'),
        isSelected: PATH.MENU === pathname,
      },
      {
        to: PATH.ABOUT,
        title: t('about'),
        isSelected: PATH.ABOUT === pathname,
      },
    ],
    [pathname, t]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Styled.HeaderContainer>
        <img
          className="brut-logo"
          src={'brut-logo.svg'}
          alt="brut-logo"
          loading="lazy"
          onClick={() => navigate(PATH.HOME)}
        />
      </Styled.HeaderContainer>
      <Styled.HamburgerMenu className="hamburger-menu" ref={hamburgerMenuRef}>
        <IconButton
          size="large"
          aria-label="menu"
          className="hamburger-menu__button"
          onClick={() => setIsMenuOpen((old) => !old)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <div
          className={classNames('hamburger-menu__content', {
            'hamburger-menu__content--hidden': !isMenuOpen,
            'hamburger-menu__content--visible': isMenuOpen,
          })}
        >
          <ul className="hamburger-menu__content__list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={classNames('hamburger-menu__content__list__item', {
                  'hamburger-menu__content__list__item--selected':
                    item.isSelected,
                })}
              >
                <Link
                  to={item.to}
                  className="hamburger-menu__content__list__item--link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="hamburger-menu__content__list__item--languages">
              <div onClick={() => changeLanguage('en')}>
                <img
                  className={classNames('flag', {
                    'flag--selected': selectedLanguage === 'en',
                  })}
                  src="/en.png"
                  alt="english"
                />
                <p>english</p>
              </div>
              <div onClick={() => changeLanguage('rs')}>
                <img
                  className={classNames('flag', {
                    'flag--selected': selectedLanguage === 'rs',
                  })}
                  src="/rs.png"
                  alt="serbian"
                />
                <p>ћирилица</p>
              </div>
              <div onClick={() => changeLanguage('rs_lt')}>
                <img
                  className={classNames('flag', {
                    'flag--selected': selectedLanguage === 'rs_lt',
                  })}
                  src="/rs.png"
                  alt="english"
                />
                <p>latinica</p>
              </div>
            </li>
            {/* <li>
              <img
                onClick={() => changeLanguage('rs')}
                className={classNames('flag', {
                  'flag--selected': selectedLanguage === 'rs',
                })}
                src="/rs.png"
                alt="serbian"
              />
              <p>ћирилица</p>
            </li>
            <li>
              <img
                onClick={() => changeLanguage('rs_lt')}
                className={classNames('flag', {
                  'flag--selected': selectedLanguage === 'rs_lt',
                })}
                src="/rs.png"
                alt="english"
              />
              <p>latinica</p>
            </li> */}
          </ul>
        </div>
      </Styled.HamburgerMenu>
    </div>
  );
};

export default Header;
