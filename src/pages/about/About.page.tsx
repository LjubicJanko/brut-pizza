import { Link } from 'react-router-dom';
import { PATH } from '../../routes';
import * as Styled from './About.styles';

const AboutPage = () => {
  return (
    <Styled.AboutPageContainer>
      <Link to={PATH.HOME}>GO TO HOME</Link>
      <br></br>
      ABOUT
    </Styled.AboutPageContainer>
  );
};

export default AboutPage;
