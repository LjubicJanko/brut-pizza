import MenuCategories from '../../components/menu-categories/MenuCategories.component';
import * as Styled from './Main.styles';

const MainPage = () => {
  return (
    <Styled.MainContainer>
      <p>Ферментација теста од минимум 30 сати.</p>
      <MenuCategories />
    </Styled.MainContainer>
  );
};

export default MainPage;
