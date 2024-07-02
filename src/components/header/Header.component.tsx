import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { ChangeLanguageDialog } from '../dialogs';
import * as Styled from './Header.styles';

const Header = () => {
  const [isChangeLanguageDialogOpen, setIsChangeLanguageDialogOpen] =
    useState(false);

  return (
    <Styled.HeaderContainer>
      <IconButton
        aria-label="change-language"
        onClick={() => setIsChangeLanguageDialogOpen(true)}
      >
        <TranslateIcon />
      </IconButton>
      <ChangeLanguageDialog
        isOpen={isChangeLanguageDialogOpen}
        onClose={() => setIsChangeLanguageDialogOpen(false)}
      />
    </Styled.HeaderContainer>
  );
};

export default Header;
