import { useTranslation } from 'react-i18next';
import * as Styled from './MenuItem.styles';
import classNames from 'classnames';
import Divider from '../divider/Divider.component';

export type MenuItemType = {
  imgSrc?: string;
  name: string;
  price: string;
  oldPrice?: string;
  isAction?: boolean;
  ingredients?: string;
};

export type MenuItemProps = MenuItemType & {
  className?: string;
};

const placeholderImage = '/placeholder.png';

const MenuItem = ({
  imgSrc,
  name,
  price,
  oldPrice,
  isAction = false,
  ingredients,
  className,
}: MenuItemProps) => {
  const { t } = useTranslation();

  if (isAction)
    return (
      <Styled.MenuItemContainer className={classNames('action', className)}>
        <span className="name">{t(name)}</span>
        <span className="separator"></span>
        <span className="old-price">{oldPrice}</span>
        <span className="price">
          {price}&nbsp;
          {t('dinars')}
        </span>
        <Divider className='action-divider'/>
      </Styled.MenuItemContainer>
    );

  return (
    <Styled.MenuItemContainer className={className}>
      {imgSrc && (
        <img
          src={imgSrc}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = placeholderImage;
          }}
          loading='lazy'
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
