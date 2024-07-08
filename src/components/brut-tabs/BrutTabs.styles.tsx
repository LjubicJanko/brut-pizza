import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

export const BrutTabContainer = styled(Tab)`
  text-transform: initial;
  min-width: 0;
  letter-spacing: 0.5px;
  margin: ${({ theme }) => theme.spacing(0, 2)};
  padding: 0;
  overflow: unset;
  font-weight: 500;

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
    color: var(--color-white);
  }
  &.pancakes-tab {
    color: var(--color-red);
  }
  &.drinks-tab {
    color: #1976d2;
  }
  
`;
