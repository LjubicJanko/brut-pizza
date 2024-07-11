import MenuItem, { MenuItemType } from '../menu-item/MenuItem.component';
import ScrollItem from '../scroll-item/ScrollItem.component';
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
          <ScrollItem key={index}>
            <MenuItem {...item} />
          </ScrollItem>
        ))}
      </div>
      {!!additions && (
        <>
          <h2 className="section-subtitle">{subtitle}</h2>
          <div className="section-additions">
            <ScrollItem>
              {additions?.map((addition, index) => (
                <MenuItem
                  key={index}
                  className="section-additions-item"
                  {...addition}
                />
              ))}
            </ScrollItem>
          </div>
        </>
      )}
    </Styled.MenuCategoryContainer>
  );
};
