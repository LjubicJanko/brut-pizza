import { useTranslation } from 'react-i18next';
import * as Styled from './Food.styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MenuItem from '../../components/menu-item/MenuItem.component';
import menuData from '../../../assets/data/menu.json';

const FoodPage = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

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
      <div id="pizza" className="section pizza">
        <h2 className="section-title">{t('pizza')}</h2>
        {menuData.pizza.map((pizza, index) => (
          <MenuItem key={index} {...pizza} />
        ))}
      </div>
      <div className="divider" />
      <div id="sandwiches" className="section sandwiches">
        <h2 className="section-title">{t('sandwiches')}</h2>
        {menuData.sandwiches.map((sandwich, index) => (
          <MenuItem key={index} {...sandwich} />
        ))}
      </div>
      <div className="divider" />
      <div id="pancakes" className="section pancakes">
        <h2 className="section-title">{t('pancakes')}</h2>
        {menuData.pancakes.map((pancake, index) => (
          <MenuItem key={index} {...pancake} />
        ))}
      </div>
    </Styled.FoodPageContainer>
  );
};

export default FoodPage;
