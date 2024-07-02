import TranslateIcon from '@mui/icons-material/Translate';
import {
  Avatar,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import classnames from 'classnames';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ChangeLanguage.styles';

export type ChangeLanguageDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const languages = ['rs', 'en'];

export const ChangeLanguageDialog = ({
  isOpen,
  onClose,
}: ChangeLanguageDialogProps) => {
  const { t, i18n } = useTranslation();

  const selectedLanguage = useMemo(
    () => i18n.language || window.localStorage.i18nextLng,
    [i18n.language]
  );

  const changeLanguageHandler = useCallback(
    (value: string) => {
      i18n.changeLanguage(value);
      onClose();
    },
    [i18n, onClose]
  );

  return (
    <Styled.ChangeLanguageContainer onClose={onClose} open={isOpen}>
      <DialogTitle>{t('change-language')}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {languages.map((language) => (
          <ListItem
            disableGutters
            key={language}
            className={classnames({
              'selected-language': selectedLanguage === language,
            })}
          >
            <ListItemButton onClick={() => changeLanguageHandler(language)}>
              <ListItemAvatar>
                <Avatar>
                  <TranslateIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={language} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Styled.ChangeLanguageContainer>
  );
};
