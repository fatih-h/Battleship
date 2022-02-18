import '../styles/home.css';
import pvp  from './pvp';
import pve from './pve';

function home(){

    let main = document.createElement('div');
    main.classList.add('home-main');

    let header = document.createElement('div');
    let title = document.createElement('h1');
    let section = document.createElement('div');
    let pvpButton = document.createElement('button');
    let pveButton = document.createElement('button');

    let arr = ['B', 'A', 'T', 'T', 'L', 'E', 'S', 'H', 'I', 'P'];
    for(let i = 0; i<10; i++){
        let span = document.createElement('span');
        span.textContent= arr[i];
        title.appendChild(span);

    }

    pvpButton.setAttribute('type', 'button');
    pveButton.setAttribute('type', 'button');
    pvpButton.textContent = 'Player vs Player';
    pveButton.textContent = 'Player vs Ai';

    header.classList.add('home-header');
    title.classList.add('home-title');
    section.classList.add('home-section');
    pvpButton.classList.add('home-pvp');
    pveButton.classList.add('home-pve');

    pveButton.addEventListener('click', () => {
        main.parentElement.appendChild(pve());
        main.remove();        
    });

    pvpButton.addEventListener('click', () => {
        // main.parentElement.append(pvp());
        // main.remove();
        alert('Under construction');
    });

    header.appendChild(title);
    section.appendChild(pvpButton);
    section.appendChild(pveButton);

    main.appendChild(header);
    main.append(section);

    return main; 
}

export default home;