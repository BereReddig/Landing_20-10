import renderCustomers from './back';
import initForm from './email';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = {
  '/': Home(),
  '/about': About(),
  '/contact': Contact(),
};

const rootDiv = document.getElementById('root');
const onNavigate = (_pathname) => {
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];

  console.log('navigating');

  // Change document content on home load
  _pathname === '/' ? renderCustomers() : undefined;
  _pathname === '/contact' ? initForm() : undefined;
};

export default onNavigate;
