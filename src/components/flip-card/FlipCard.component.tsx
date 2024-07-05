import { ReactElement, useCallback, useRef, useState } from 'react';
import * as Styled from './FlipCard.styles';
import useClickListener from '../../hooks/useClickListener';

export type FlipCardProps = {
  front: ReactElement;
  back: ReactElement;
};

export const FlipCard = ({ front, back }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(() => {
    setIsFlipped(true);
  }, []);

  useClickListener<HTMLDivElement>(
    flipCardRef,
    () => setIsFlipped(false),
    isFlipped
  );

  return (
    <Styled.FlipCardContainer ref={flipCardRef} onClick={handleCardClick}>
      <Styled.CardInner isFlipped={isFlipped}>
        <Styled.CardFront>{front}</Styled.CardFront>
        <Styled.CardBack>{back}</Styled.CardBack>
      </Styled.CardInner>
    </Styled.FlipCardContainer>
  );
};
