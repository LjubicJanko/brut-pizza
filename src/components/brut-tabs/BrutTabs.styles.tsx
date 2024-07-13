import { Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

export const BrutTabsContainer = styled(Tabs)`
  .MuiTabs-flexContainer {
    justify-content: space-between;
  }
`;

export const BrutTabContainer = styled(Tab)`
  text-transform: initial;
  min-width: 0;
  letter-spacing: 0.5px;
  padding: 0;
  overflow: unset;

  font-family: 'Alegreya', serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;

  &:hover::before {
    background-color: rgba(41, 40, 40, 0.04);
  }

  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    right: -1rem;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-width: 0;
  }

  &.pizza-tab {
    color: var(--color-green);
  }
  &.sandwiches-tab {
    color: var(--color-blue);
  }
  &.pancakes-tab {
    color: var(--color-white);
  }
  &.drinks-tab {
    color: var(--color-blue);
  }
  &.actions-tab {
    color: var(--color-red);
  }
`;
