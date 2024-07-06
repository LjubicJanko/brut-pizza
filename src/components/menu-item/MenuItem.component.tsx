import { useTranslation } from 'react-i18next';
import * as Styled from './MenuItem.styles';

export type MenuItemProps = {
  imgSrc?: string;
  name: string;
  price: string;
  ingredients?: string;
  className?: string;
};

const placeholderImage = '/placeholder.png';

const MenuItem = ({
  imgSrc,
  name,
  price,
  ingredients,
  className,
}: MenuItemProps) => {
  const { t } = useTranslation();

  return (
    <Styled.MenuItemContainer className={className}>
      {imgSrc && (
        <img
          src={imgSrc}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = placeholderImage;
          }}
        />
      )}
      <div className="name-and-price">
        <span className="name">{t(name)}</span>
        <span className="separator"></span>
        <span className="price">
          {price}&nbsp;
          {t('dinars')}
        </span>
      </div>
      {ingredients && <p className="ingredients">{t(ingredients)}</p>}
    </Styled.MenuItemContainer>
  );
};

export default MenuItem;
