import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';

const navbar = () => {
  return `
    <div class="navbar-top">
      <img src="${logo}" alt="logo" class="logo" />
      <input type="checkbox" name="nav-toggle" id="nav-toggle" />
      <label for="nav-toggle"
        ><img src="${hamburger}" alt="hamburguer icon"
      /></label>
      <nav class="nav-menu">
        <li><button id="link-home">home</button></li>
        <li><button id="link-about">about</button></li>
        <li><button id="link-contact" class="btn">contact us</button></li>
      </nav>
    </div>
    `;
};

export default navbar;
