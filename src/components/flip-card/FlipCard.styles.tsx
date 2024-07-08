import styled, { css } from 'styled-components';

const cardStyles = css`
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  border: 1px solid black;
  top: 0;
  left: 0;
  transition: transform 0.6s;
`;

export const FlipCardContainer = styled.div`
  width: 100%;
  min-height: 250px;
  perspective: 1000px;
  position: relative;
`;

export const CardInner = styled.div<{ $flipped: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $flipped }) =>
    $flipped === 'true' ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const CardFront = styled.div`
  ${cardStyles}
  background-color: var(--color-background-1);
  color: var(--color-white);
  img {
    width: 300px;
  }
`;

export const CardBack = styled.div`
  ${cardStyles}
  background-color: var(--color-background-1);
  color: var(--color-white);
  transform: rotateY(180deg);
`;
