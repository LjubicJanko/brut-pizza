import { useCallback, useEffect } from 'react';

const useClickListener = <T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  clickedOutsideCallback: () => void,
  shouldBeTriggered = true
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        shouldBeTriggered &&
        event.target &&
        elementRef.current &&
        !event.composedPath().includes(elementRef.current)
      ) {
        clickedOutsideCallback();
      }
    },
    [clickedOutsideCallback, elementRef, shouldBeTriggered]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickListener;
