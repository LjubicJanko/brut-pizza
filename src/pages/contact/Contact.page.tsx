import { Link } from "react-router-dom";
import { PATH } from "../../routes";

const ContactPage = () => {
  return (
    <>
      <Link to={PATH.HOME}>Home</Link><br></br>
      contact
    </>
  );
};

export default ContactPage;
