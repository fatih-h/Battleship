import home from './home';   
import pvp  from './pvp';
import pve from './pve';
import '../styles/style.css';


const content = document.getElementById('content');


content.appendChild(pve());

