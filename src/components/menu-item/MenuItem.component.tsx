import Heading from '../atoms/Heading/Heading.component';
import * as Styled from './MenuItem.styles';

export type MenuItemProps = {
  title: string;
  imageSrc: string;
  ingredients: string;
  price: string;
};

const MenuItem = ({ title, imageSrc, ingredients, price }: MenuItemProps) => {
  return (
    <Styled.MenuItemContainer>
      <Heading type={'2'}>{title}</Heading>
      <img className="meal-image" src={imageSrc} />
      <p className="meal-ingredients">{ingredients}</p>
      <Heading type={'3'}>{price}</Heading>
    </Styled.MenuItemContainer>
  );
};

export default MenuItem;
