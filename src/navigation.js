/* Pages */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * Page specific functions
 * These need to be loaded on specific page load
 * - renderCustomer: fetch customers names from db and edits the DOM in the Home page
 * - initForm: adds the submit event handler to the contact form in the Contact page
 */
import renderCustomers from './back';
import initForm from './email';

const routes = {
  '/': Home(),
  '/about': About(),
  '/contact': Contact(),
};

const rootDiv = document.getElementById('root');

/* Navigation handler */
const onNavigate = (_pathname) => {
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];

  // Page specific functions load
  _pathname === '/' ? renderCustomers() : undefined;
  _pathname === '/contact' ? initForm() : undefined;
};

export default onNavigate;
