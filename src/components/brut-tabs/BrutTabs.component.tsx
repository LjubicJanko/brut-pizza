import { tabsClasses } from '@mui/material/Tabs';
import { t } from 'i18next';
import * as Styled from './BrutTabs.styles';

export type BrutTabsProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export const BrutTabs = ({ activeTab, setActiveTab }: BrutTabsProps) => {
  return (
    <Styled.BrutTabsContainer
      value={activeTab}
      onChange={(_e, index) => {
        setActiveTab(index);
      }}
      className="tabs"
      sx={{
        [`& .${tabsClasses.indicator}`]: {
          height: 3,
          borderTopLeftRadius: '3px',
          borderTopRightRadius: '3px',
          backgroundColor: 'var(--color-green)',
        },
      }}
    >
      <Styled.BrutTabContainer
        disableRipple
        label={t('pizza')}
        className="pizza-tab"
      />
      <Styled.BrutTabContainer
        disableRipple
        label={t('sandwiches')}
        className="sandwiches-tab"
      />
      <Styled.BrutTabContainer
        disableRipple
        label={t('pancakes')}
        className="pancakes-tab"
      />
      <Styled.BrutTabContainer
        disableRipple
        label={t('drinks')}
        className="drinks-tab"
      />
    </Styled.BrutTabsContainer>
  );
};
