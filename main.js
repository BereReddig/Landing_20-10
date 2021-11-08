/* GLOBAL UTILITIES */
import './src/assets/css/style.css';
import './src/rollbar.config';
import onNavigate from './src/navigation';

/* UI IMPORTS */
import navbar from './src/components/navbar';
import footer from './src/components/footer';

/* UI INITIALIZATION */

// Navbar
document.getElementById('navbar').innerHTML = navbar();
// The navigation handlers are attached once the navigation items are rendered
document.getElementById('link-home').addEventListener('click', () => onNavigate('/'));
document.getElementById('link-about').addEventListener('click', () => onNavigate('/about'));
document.getElementById('link-contact').addEventListener('click', () => onNavigate('/contact'));

// Footer
document.getElementById('footer').innerHTML = footer();

// Show home view on page load
const rootDiv = document.getElementById('root');
rootDiv.addEventListener('onload', onNavigate('/'));
