import { capitalizer, addElWithClass} from './helpers';
import { menuClick } from './events';

function header() {
    const header = document.createElement('header');
    const menu = document.createElement('ul');
    menu.setAttribute('id','menu');
    const menuItems = ['home','menu','contacts'];
    menuItems.forEach((el) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add(`${el}`);
        a.setAttribute('href',`#${el}`);
        a.innerText = capitalizer(el);
        a.addEventListener('click',menuClick);
        li.appendChild(a);
        menu.appendChild(li);
    });

    header.appendChild(menu);

    document.querySelector('#content').append(header);  
}

function footer() {
     // footer
     const footer = document.createElement('footer');
     const adress = document.createElement('p');
     adress.innerHTML = '<strong>Kyiv, Ukraine</strong><br>Big Street, 25';
     const hours = document.createElement('p');
     hours.innerHTML = '<strong>10:00-22:00</strong><br>Monday-Sunday';
     const contact = document.createElement('p');
     contact.innerHTML = '<strong>Call for reserves:</strong><br>+38 098 998-88-77';
 
     //adding logo to footer
     const footerLogo = addElWithClass('div','bottom-logo');
     footerLogo.classList.add('hide');
     const footerH2 = addElWithClass('h2');
     footerH2.innerText = 'Hoojambra';
     const footerSpan = addElWithClass('span');
     footerSpan.innerText = 'restaurant';
     footerLogo.append(footerH2,footerSpan);
 
     footer.append(footerLogo,adress,hours,contact);
 
     document.querySelector('#content').append(footer); 
}


export {
    header,
    footer
}

export {default as main} from './main';
export {default as menu} from './menu';
export {default as contacts} from './contacts';

