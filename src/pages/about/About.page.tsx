import { Link } from 'react-router-dom';
import { PATH } from '../../routes';

const AboutPage = () => {
  return (
    <>
      <Link to={PATH.HOME}>GO TO HOME</Link>
      <br></br>
      about
    </>
  );
};

export default AboutPage;
