import { markCurrent, load } from "./events";

document.addEventListener('DOMContentLoaded',(e) => {
    // header
    load.content('header');

    // MAIN
    const main = document.createElement('main');
    document.querySelector('#content').appendChild(main); 
    // let current = main();
    markCurrent('home');
    load.content('home');

    load.content('footer');
});