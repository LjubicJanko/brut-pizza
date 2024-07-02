import { Link } from 'react-router-dom';
import { PATH } from '../../routes';
import * as Styled from './Menu.styles';

const MenuPage = () => {
  return (
    <Styled.MenuPageContainer>
      <Link to={PATH.HOME}>GO TO HOME</Link>
      <br></br>
      Menu
    </Styled.MenuPageContainer>
  );
};

export default MenuPage;
