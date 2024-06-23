import { useMemo } from 'react';
import MenuItem, { MenuItemProps } from '../menu-item/MenuItem.component';
import * as Styled from './Menu.styles';

const Menu = () => {
  const menuItems: MenuItemProps[] = useMemo(
    () => [
      {
        title: 'Madjarica',
        imageSrc: '/src/assets/vegetarijana.jpg',
        ingredients:
          'Pelat, origano,sunkai',
        price: '650',
      },
      {
        title: 'Kapricoza',
        imageSrc: '/src/assets/vegetarijana.jpg',
        ingredients:
          'sir, slanina, domaća kobasica, feferoni',
        price: '850',
      },
      {
        title: 'Vegeterijana',
        imageSrc: '/src/assets/vegetarijana.jpg',
        ingredients:
          'feferoni',
        price: '1650',
      },
      {
        title: 'Madjarica',
        imageSrc: '/src/assets/vegetarijana.jpg',
        ingredients:
          'Pelat, origano,sunka, šampinjoni, sir, slanina, domaća kobasica, feferoni',
        price: '600',
      },
    ],
    []
  );

  return (
    <Styled.MenuContainer>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </Styled.MenuContainer>
  );
};

export default Menu;
