
function home(){

    let main = document.createElement('div');
    main.classList.add('main');

    let header = document.createElement('div');
    let title = document.createElement('h1');
    let section = document.createElement('div');
    let pvpButton = document.createElement('button');
    let pveButton = document.createElement('button');

    let arr = ['B', 'A', 'T', 'T', 'L', 'E', 'S', 'H', 'I', 'P'];
    for(let i = 0; i<=10; i++){
        let span = document.createElement('span');
        span.textContent= arr[i];
        title.appendChild(span);

    }

    pvpButton.setAttribute('type', 'button');
    pveButton.setAttribute('type', 'button');
    pvpButton.textContent = 'Player vs Player';
    pveButton.textContent = 'Player vs Ai';

    header.classList.add('header');
    title.classList.add('title');
    section.classList.add('section');
    pvpButton.classList.add('pvp');
    pveButton.classList.add('pve');

    header.appendChild(title);
    section.appendChild(pvpButton);
    section.appendChild(pveButton);

    main.appendChild(header);
    main.append(section);

    return main; 
}

export default home;