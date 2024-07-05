import MenuCategories from '../../components/menu-categories/MenuCategories.component';
import * as Styled from './Home.styles';

const HomePage = () => {
  return (
    <Styled.HomeContainer>
      <p>Ферментација теста од минимум 30 сати.</p>
      <MenuCategories />
    </Styled.HomeContainer>
  );
};

export default HomePage;
