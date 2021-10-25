import navbar from './src/components/navbar';
import footer from './src/components/footer';

import onNavigate from './src/navigation';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

// Show home view on page load
const rootDiv = document.getElementById('root');
rootDiv.addEventListener('onload', onNavigate('/'));
