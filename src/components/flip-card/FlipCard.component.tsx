import { ReactElement, useCallback, useRef, useState } from 'react';
import * as Styled from './FlipCard.styles';
import useClickListener from '../../hooks/useClickListener';

export type FlipCardProps = {
  front: ReactElement;
  back: ReactElement;
};

export const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const flipCardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(() => {
    setFlipped((old) => !old);
  }, []);

  useClickListener<HTMLDivElement>(
    flipCardRef,
    () => setFlipped(false),
    flipped
  );

  return (
    <Styled.FlipCardContainer ref={flipCardRef} onClick={handleCardClick}>
      <Styled.CardInner $flipped={flipped.toString()}>
        <Styled.CardFront>{front}</Styled.CardFront>
        <Styled.CardBack>{back}</Styled.CardBack>
      </Styled.CardInner>
    </Styled.FlipCardContainer>
  );
};
