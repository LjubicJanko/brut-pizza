import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlipCard } from '../flip-card/FlipCard.component';
import * as Styled from './MenuCategories.styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollItem from '../scroll-item/ScrollItem.component';

type MenuCategoryType = {
  title: string;
  imageSrc: string;
  to: string;
  aria: string;
};

const MenuCategories = () => {
  const { t } = useTranslation();

  const menuCategories: MenuCategoryType[] = useMemo(
    () => [
      {
        title: 'actions',
        imageSrc: 'https://brutpizza.imgix.net/discount.png',
        to: '/menu#actions',
        aria: 'aria-label.actions',
      },
      {
        title: 'pizza',
        imageSrc: 'https://brutpizza.imgix.net/pizza/Mala_Vojvodjanka.png',
        to: '/menu#pizza',
        aria: 'aria-label.pizza',
      },
      {
        title: 'sandwiches',
        imageSrc: 'https://brutpizza.imgix.net/sandwiches/prsuta.png',
        to: '/menu#sandwiches',
        aria: 'aria-label.sandwiches',
      },
      {
        title: 'pancakes',
        imageSrc: 'https://brutpizza.imgix.net/nutela.png',
        to: '/menu#pancakes',
        aria: 'aria-label.pancakes',
      },
      {
        title: 'drinks',
        imageSrc: 'https://brutpizza.imgix.net/pepsi.png',
        to: '/menu#drinks',
        aria: 'aria-label.drinks',
      },
    ],
    []
  );

  return (
    <>
      <Styled.MenuCategoriesContainer>
        <h2>{t('menu-categories-title')}</h2>
        <div className="menu-categories">
          {menuCategories.map((menuCategory, index) => (
            <ScrollItem key={index}>
              <FlipCard
                front={
                  <div className="front-inner">
                    <img
                      src={menuCategory.imageSrc}
                      alt={`${t(menuCategory.title)} ${t('alt.menu-category')}`}
                    />
                    <p className="title">
                      {t(menuCategory.title).toUpperCase()}
                    </p>
                  </div>
                }
                back={
                  <div>
                    <Link to={menuCategory.to}>
                      <Button
                        variant="outlined"
                        className="check-offer-btn"
                        aria-label={t(menuCategory.aria)}
                      >
                        {t('check-offer')}
                      </Button>
                    </Link>
                  </div>
                }
              />
            </ScrollItem>
          ))}
        </div>
      </Styled.MenuCategoriesContainer>
    </>
  );
};

export default MenuCategories;
