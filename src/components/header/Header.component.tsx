// import TranslateIcon from '@mui/icons-material/Translate';
// import { IconButton } from '@mui/material';
import { useState } from 'react';
import { ChangeLanguageDialog } from '../dialogs';
import * as Styled from './Header.styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isChangeLanguageDialogOpen, setIsChangeLanguageDialogOpen] =
    useState(false);

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
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </div>
      <ChangeLanguageDialog
        isOpen={isChangeLanguageDialogOpen}
        onClose={() => setIsChangeLanguageDialogOpen(false)}
      />
    </Styled.HeaderContainer>
  );
};

export default Header;
