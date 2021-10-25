import logo from '../assets/images/logo.svg';
import iconFacebook from '../assets/images/icon-facebook.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';

const footer = () => {
  return `
    <footer class="footer">
      <div class="col">
        <img src="${logo}" alt="myteam logo" class="footer__logo" />
        <nav class="footer__nav">
          <li><a href="index.html">home</a></li>
          <li><a href="about.html">about</a></li>
        </nav>
      </div>
      <div class="col">
        <div class="footer__contact">
          <span>987 Hillcrest Lane</span>
          <span>Irvine, CA</span>
          <span>California 92714</span>
          <span>Call Us: 949-833-7432</span>
        </div>
        <div>
          <div class="footer__social-media">
            <a href="#"><img src="${iconFacebook}" alt="facebook link" /></a>
            <a href="#"
              ><img src="${iconPinterest}" alt="pinterest link"
            /></a>
            <a href="#"><img src="${iconTwitter}" alt="twitter link" /></a>
          </div>
          <span class="footer__copyright">Copyright 2020. All Rights Reserved </span>
        </div>
      </div>
    </footer>
    `;
};

export default footer;
