import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlipCard } from '../flip-card/FlipCard.component';
import * as Styled from './MenuCategories.styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type MenuCategoryType = {
  title: string;
  imageSrc: string;
  to: string;
};

const MenuCategories = () => {
  const { t } = useTranslation();

  const menuCategories: MenuCategoryType[] = useMemo(
    () => [
      {
        title: 'pizza',
        imageSrc: '/corizo.jpg',
        to: '/menu#pizza',
      },
      {
        title: 'sandwiches',
        imageSrc: '/sendvic.jpg',
        to: '/menu#sandwiches',
      },
      {
        title: 'pancakes',
        imageSrc: '/svarcvald.jpg',
        to: '/menu#pancakes',
      },
      {
        title: 'drinks',
        imageSrc: '/drinks.jpg',
        to: '/menu#drinks',
      },
    ],
    []
  );

  return (
    <Styled.MenuCategoriesContainer>
      {menuCategories.map((menuCategory, index) => (
        <FlipCard
          key={index}
          front={
            <div className="front-inner">
              <img src={menuCategory.imageSrc} />
              <p>{t(menuCategory.title)}</p>
            </div>
          }
          back={
            <div>
              <Link to={menuCategory.to}>
                <Button variant="outlined" className="check-offer-btn">
                  {t('check-offer')}
                </Button>
              </Link>
            </div>
          }
        />
      ))}
    </Styled.MenuCategoriesContainer>
  );
};

export default MenuCategories;
