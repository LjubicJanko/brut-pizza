import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import * as Styled from './Heading.styles';

export type HeadingProps = {
  type: '1' | '2' | '3';
  children: ReactNode;
} & Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  'ref'
>;

const Heading = ({
  children,
  className,
  color = 'black',
  type,
  ...rest
}: HeadingProps) => {
  switch (type) {
    case '1':
      return (
        <Styled.HeadingOne className={className} color={color} {...rest}>
          {children}
        </Styled.HeadingOne>
      );
    case '2':
      return (
        <Styled.HeadingTwo className={className} color={color} {...rest}>
          {children}
        </Styled.HeadingTwo>
      );
    case '3':
      return (
        <Styled.HeadingThree className={className} color={color} {...rest}>
          {children}
        </Styled.HeadingThree>
      );
    default:
      return (
        <Styled.HeadingOne className={className} color={color} {...rest}>
          {children}
        </Styled.HeadingOne>
      );
  }
};

export default Heading;
