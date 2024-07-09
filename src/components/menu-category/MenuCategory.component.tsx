import MenuItem, { MenuItemType } from '../menu-item/MenuItem.component';
import * as Styled from './MenuCategory.styles';

export type MenuCategoryProps = {
  sectionId: string;
  className?: string;
  subtitle?: string;
  items: MenuItemType[];
  additions?: MenuItemType[];
};

export const MenuCategory = ({
  sectionId,
  className,
  subtitle,
  items,
  additions,
}: MenuCategoryProps) => {
  return (
    <Styled.MenuCategoryContainer id={sectionId} className={className}>
      <div className="section-items">
        {items?.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      {!!additions && (
        <>
          <h2 className="section-subtitle">{subtitle}</h2>
          <div className="section-additions">
            {additions?.map((addition, index) => (
              <MenuItem
                key={index}
                className="section-additions-item"
                {...addition}
              />
            ))}
          </div>
        </>
      )}
    </Styled.MenuCategoryContainer>
  );
};
