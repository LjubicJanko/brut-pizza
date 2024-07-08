import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import menuData from '../../../public/data/menu.json';
import { BrutTabs } from '../../components/brut-tabs/BrutTabs.component';
import {
  MenuCategory,
  MenuCategoryProps,
} from '../../components/menu-category/MenuCategory.component';
import * as Styled from './Menu.styles';

const MenuPage = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();
  const nodeRef = useRef(null);

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

  const initialyActiveTab = useMemo(() => {
    const hashActivityIndex = foodCatogriesOrder.findIndex(
      (x) => x.sectionId === hash.substring(1)
    );

    return hashActivityIndex !== -1 ? hashActivityIndex : 0;
  }, [foodCatogriesOrder, hash]);

  const [activeTab, setActiveTab] = useState<number>(initialyActiveTab);
  const [direction, setDirection] = useState<'to-left' | 'to-right'>('to-left');

  return (
    <Styled.MenuPageContainer direction={direction}>
      <BrutTabs
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setDirection(tab > activeTab ? 'to-left' : 'to-right');
          setActiveTab(tab);
        }}
      />
      <div className="divider" />
      <TransitionGroup>
        <CSSTransition
          key={activeTab}
          timeout={300}
          classNames="slide"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            <MenuCategory {...foodCatogriesOrder[activeTab]} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Styled.MenuPageContainer>
  );
};

export default MenuPage;
