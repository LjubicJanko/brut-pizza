import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import menuData from '../../../public/data/menu.json';
import {
  BrutTabs,
  TabName,
} from '../../components/brut-tabs/BrutTabs.component';
import {
  MenuCategory,
  MenuCategoryProps,
} from '../../components/menu-category/MenuCategory.component';
import * as Styled from './Food.styles';

const FoodPage = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const [activeTab, setActiveTab] = useState<TabName>(
    (hash.substring(1) as TabName) || 'pizza'
  );

  const foodMap: Record<TabName, MenuCategoryProps> = {
    pizza: {
      sectionId: 'pizza',
      className: 'pizza',
      title: t('pizza'),
      items: menuData.pizza,
      subtitle: t('additions'),
      additions: menuData.pizza_additions,
    },
    sandwiches: {
      sectionId: 'sandwiches',
      className: 'sandwiches',
      title: t('sandwiches'),
      items: menuData.sandwiches,
    },
    pancakes: {
      sectionId: 'pancakes',
      className: 'pancakes',
      title: t('pancakes'),
      items: menuData.pancakes,
      subtitle: t('additions'),
      additions: menuData.pancakes_additions,
    },
    drinks: {
      sectionId: 'drinks',
      className: 'drinks',
      title: t('drinks'),
      items: menuData.drinks,
    },
  };

  return (
    <Styled.FoodPageContainer>
      <BrutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="divider" />
      <MenuCategory {...foodMap[activeTab]} />
    </Styled.FoodPageContainer>
  );
};

export default FoodPage;
