import { header, footer, main, menu, contacts} from "./template";
// import main from "./main";
// import menu from "./menu";
// import contacts from "./contacts";

function animateFade(toDo) {
    const main = document.querySelector('main');
    main.classList.remove('show');
    main.classList.add('hide');
    main.classList.add('main-content');

    setTimeout(function() {    
        main.innerHTML = '';
        toDo(main)
        main.classList.remove('hide');
        main.classList.add('show');
    }, 400);
}

function changeBg(cl) {
    const mainContainer = document.querySelector('.main-container')
        mainContainer.className = '';
        if (cl != undefined) {
            mainContainer.classList.add('main-container',cl);
        } else {
            mainContainer.classList.add('main-container');
        }
}

function markCurrent(current) {
    const links = document.querySelectorAll('#menu li a');
    links.forEach((link) => {
        if (link.classList.contains(current)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

const load = {
    'home': () => {main()},
    'menu': () => {menu()},
    'contacts': () => {contacts()},
    'header': () => {header()},
    'footer': () => {footer()},
    content(target) {
        if (this.hasOwnProperty(target)) {
            const action = this[target];
            action();
        } else {
            console.log('404 -- page not found');
        }
    }
}


function menuClick(event) {
    const target = event.target.classList[0];
    markCurrent(target);
    load.content(target);
    showBottomLogo(target);
}

function showBottomLogo(current) {
    const bottomLogo = document.querySelector('.bottom-logo');
    if (current != 'home') {
        setTimeout(function() {
            bottomLogo.classList.remove('hide');
            bottomLogo.classList.add('show');
        },400);
    } else {
            bottomLogo.classList.remove('show');
            bottomLogo.classList.add('hide');
    }
}

export {
    menuClick,
    load,
    markCurrent,
    changeBg,
    animateFade,
    showBottomLogo
}