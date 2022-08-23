import { addElWithClass } from "./helpers";
import { animateFade, changeBg } from "./events";


const contacts = function() {
    changeBg('contacts-bg');

    function showContacts() {
        const h1 = document.createElement('h1');
        h1.classList.add('teaser-logo');
        h1.innerText = 'See you';
        const p = document.createElement('p');
        p.innerText = 'We\'re waiting for you here. You\'re very welcome.'; 
        main.append(h1,p);   
    }

    const main = document.querySelector('main');
    main.innerHTML = '';
     animateFade(showContacts);
 
     return 'contacts';
 };
 
 export default contacts;
 