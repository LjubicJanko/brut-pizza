import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import menuData from '../../../public/data/menu.json';
import {
  MenuCategory,
  MenuCategoryProps,
} from '../../components/menu-category/MenuCategory.component';
import * as Styled from './Food.styles';

const FoodPage = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const foodConfigMap: MenuCategoryProps[] = useMemo(
    () => [
      {
        sectionId: 'pizza',
        className: 'pizza',
        title: t('pizza'),
        items: menuData.pizza,
        subtitle: t('additions'),
        additions: menuData.pizza_additions,
      },
      {
        sectionId: 'sandwiches',
        className: 'sandwiches',
        title: t('sandwiches'),
        items: menuData.sandwiches,
      },
      {
        sectionId: 'pancakes',
        className: 'pancakes',
        title: t('pancakes'),
        items: menuData.pancakes,
        subtitle: t('additions'),
        additions: menuData.pancakes_additions,
      },
      {
        sectionId: 'drinks',
        className: 'drinks',
        title: t('drinks'),
        items: menuData.drinks,
      },
    ],
    [t]
  );

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <Styled.FoodPageContainer>
      {foodConfigMap.map((x) => (
        <>
          <MenuCategory {...x} />
          <div className="divider" />
        </>
      ))}
    </Styled.FoodPageContainer>
  );
};

export default FoodPage;
