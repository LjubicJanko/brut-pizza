import TranslateIcon from '@mui/icons-material/Translate';
import { useMemo, useState } from 'react';
import { ChangeLanguageDialog } from '../dialogs';
import * as Styled from './Header.styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const [isChangeLanguageDialogOpen, setIsChangeLanguageDialogOpen] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      {
        onClick: () => {},
        // onClick: () => history.push(PATH.MENU),
        title: t('menu'),
        isSelected: false,
      },
      {
        onClick: () => {},
        // onClick: () => history.push(PATH.CONTACT),
        title: t('contact'),
        isSelected: false,
      },
    ],
    [t]
  );
  return (
    <Styled.HeaderContainer>
      {/* <IconButton
        aria-label="change-language"
        onClick={() => setIsChangeLanguageDialogOpen(true)}
      >
        <TranslateIcon />
      </IconButton> */}
      <img
        className="brut-logo"
        src={'brut.jpg'}
        alt="brut-logo"
        loading="lazy"
      />
      <div className="hamburger-menu">
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
          })}
        >
          <ul className="hamburger-menu__content__list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hamburger-menu__content__list__item"
                onClick={item.onClick}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <IconButton
            aria-label="change-language"
            onClick={() => setIsChangeLanguageDialogOpen(true)}
          >
            <TranslateIcon />
          </IconButton>
        </div>
      </div>
      <ChangeLanguageDialog
        isOpen={isChangeLanguageDialogOpen}
        onClose={() => setIsChangeLanguageDialogOpen(false)}
      />
    </Styled.HeaderContainer>
  );
};

export default Header;
