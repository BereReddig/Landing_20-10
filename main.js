import './src/assets/css/style.css';

import navbar from './src/components/navbar';
import footer from './src/components/footer';

import onNavigate from './src/navigation';

// Navbar initialization
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('link-home').addEventListener('click', () => onNavigate('/'));
document.getElementById('link-about').addEventListener('click', () => onNavigate('/about'));
document.getElementById('link-contact').addEventListener('click', () => onNavigate('/contact'));

document.getElementById('footer').innerHTML = footer();

// Show home view on page load
const rootDiv = document.getElementById('root');
rootDiv.addEventListener('onload', onNavigate('/'));
