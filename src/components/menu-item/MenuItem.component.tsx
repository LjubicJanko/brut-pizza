import { useTranslation } from 'react-i18next';
import * as Styled from './MenuItem.styles';

export type MenuItemProps = {
  imgSrc: string;
  name: string;
  price: string;
  ingredients: string;
};

const MenuItem = ({ imgSrc, name, price, ingredients }: MenuItemProps) => {
  const { t } = useTranslation();

  return (
    <Styled.MenuItemContainer>
      <img src={imgSrc} />
      <div className="name-and-price">
        <span className="name">{t(name)}</span>
        <span className="separator"></span>
        <span className="price">
          {price}&nbsp;
          {t('dinars')}
        </span>
      </div>
      <p className="ingredients">{t(ingredients)}</p>
    </Styled.MenuItemContainer>
  );
};

export default MenuItem;
