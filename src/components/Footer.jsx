import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class='page-footer'>
      <div class='row center-align'>
        <div class='col s2 offset-s2'>
          <a
            class='grey-text text-lighten-3'
            href='https://www.linkedin.com/in/narimanjs'
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div class='col s2'>
          <a
            class='grey-text text-lighten-3'
            href='https://t.me/narimanjs'
          >
            <FaTelegramPlane />
          </a>
        </div>
        <div class='col s2'>
          <a
            class='grey-text text-lighten-3'
            href='https://github.com/narimanjs'
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div class='container'>© 2024 Copyright Text</div>
    </footer>
  );
};

export default Footer;
