import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './ScrollItem.styles.css';

interface ScrollItemProps {
  children: React.ReactNode;
}

const ScrollItem: React.FC<ScrollItemProps> = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`scroll-item ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default ScrollItem;
