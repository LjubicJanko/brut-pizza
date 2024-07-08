import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import menuData from '../../../public/data/menu.json';
import { BrutTabs } from '../../components/brut-tabs/BrutTabs.component';
import {
  MenuCategory,
  MenuCategoryProps,
} from '../../components/menu-category/MenuCategory.component';
import * as Styled from './Food.styles';

const FoodPage = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const foodCatogriesOrder: MenuCategoryProps[] = useMemo(
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

  const [activeTab, setActiveTab] = useState<number>(
    foodCatogriesOrder.findIndex((x) => x.sectionId === hash.substring(1)) || 0
  );
  const [transitionDirection, setTransitionDirection] = useState<
    'to-left' | 'to-right'
  >('to-left');

  return (
    <Styled.FoodPageContainer transitionDirection={transitionDirection}>
      <BrutTabs
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setTransitionDirection(tab > activeTab ? 'to-left' : 'to-right');
          setActiveTab(tab);
        }}
      />
      <div className="divider" />
      <TransitionGroup>
        <CSSTransition key={activeTab} timeout={300} classNames="slide">
          <MenuCategory {...foodCatogriesOrder[activeTab]} />
        </CSSTransition>
      </TransitionGroup>
    </Styled.FoodPageContainer>
  );
};

export default FoodPage;
