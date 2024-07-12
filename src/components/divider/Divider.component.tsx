import * as Styled from './Divider.styles';

export type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  return <Styled.DividerContainer className={className} />;
};

export default Divider;
