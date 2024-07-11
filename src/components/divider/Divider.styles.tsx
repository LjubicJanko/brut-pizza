import styled from 'styled-components';

export const DividerContainer = styled.div`
  background: var(--color-white);
  position: relative;
  height: 1px;
  background: linear-gradient(
    90deg,
    var(--color-green) 0%,
    var(--color-green) 33%,
    var(--color-white) 33%,
    var(--color-white) 66%,
    var(--color-red) 66%,
    var(--color-red) 100%
  );
`;
