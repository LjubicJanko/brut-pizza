import { useTranslation } from 'react-i18next';
import * as Styled from './Food.styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MenuItem from '../../components/menu-item/MenuItem.component';
import menuData from '../../../public/data/menu.json';

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
        <div className="section-items">
          {menuData.pizza.map((pizza, index) => (
            <MenuItem key={index} {...pizza} />
          ))}
        </div>
        <h2 className="section-subtitle">{t('pizza_additions')}</h2>
        <div className="section-additions">
          {menuData.pizza_additions.map((addition, index) => (
            <MenuItem
              key={index}
              className="section-additions-item"
              {...addition}
            />
          ))}
        </div>
      </div>
      <div className="divider" />
      <div id="sandwiches" className="section sandwiches">
        <h2 className="section-title">{t('sandwiches')}</h2>
        <div className="section-items">
          {menuData.sandwiches.map((sandwich, index) => (
            <MenuItem key={index} {...sandwich} />
          ))}
        </div>
      </div>
      <div className="divider" />
      <div id="pancakes" className="section pancakes">
        <h2 className="section-title">{t('pancakes')}</h2>
        <div className="section-items">
          {menuData.pancakes.map((pancake, index) => (
            <MenuItem key={index} {...pancake} />
          ))}
        </div>
      </div>
      <div className="divider" />
      <div id="drinks" className="section drinks">
        <h2 className="section-title">{t('drinks')}</h2>
        <div className="section-items">
          {menuData.drinks.map((drinks, index) => (
            <MenuItem key={index} {...drinks} />
          ))}
        </div>
      </div>
    </Styled.FoodPageContainer>
  );
};

export default FoodPage;
