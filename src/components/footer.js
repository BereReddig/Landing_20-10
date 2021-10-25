const footer = () => {
  return `
    <footer class="footer">
      <div class="col">
        <img src="./src/assets/images/logo.svg" alt="myteam logo" class="footer__logo" />
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
            <a href="#"><img src="./src/assets/images/icon-facebook.svg" alt="facebook link" /></a>
            <a href="#"
              ><img src="./src/assets/images/icon-pinterest.svg" alt="pinterest link"
            /></a>
            <a href="#"><img src="./src/assets/images/icon-twitter.svg" alt="twitter link" /></a>
          </div>
          <span class="footer__copyright">Copyright 2020. All Rights Reserved </span>
        </div>
      </div>
    </footer>
    `;
};

export default footer;
