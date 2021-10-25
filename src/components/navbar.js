import onNavigate from '../navigation';

console.log(onNavigate);

const navbar = () => {
  return `
    <div class="navbar-top">
      <img src="./src/assets/images/logo.svg" alt="logo" class="logo" />
      <input type="checkbox" name="nav-toggle" id="nav-toggle" />
      <label for="nav-toggle"
        ><img src="./src/assets/images/icon-hamburger.svg" alt="hamburguer icon"
      /></label>
      <nav class="nav-menu">
        <li><button onclick="${onNavigate('/')}">home</button></li>
        <li><button onclick="${onNavigate('/about')}">about</button></li>
        <li><button onclick="${onNavigate('/contact')}" class="btn">contact us</button></li>
      </nav>
    </div>
    `;
};

export default navbar;
