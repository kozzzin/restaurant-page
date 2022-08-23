import { addElWithClass } from "./helpers";
import { animateFade, changeBg } from "./events";

const menu = function() {
    //dishes
    const dishes = [
        [
            './img/dish01.png',
            'Morning Sprouts',
            '1200'
        ],
        [
            './img/dish02.png',
            'Late Breakfast',
            '600'
        ],
        [
            './img/dish03.png',
            'Salmonella',
            '1900'
        ],
        [
            './img/dish04.png',
            'Jamonessa',
            '2200'
        ],
        [
            './img/dish05.png',
            'Shtimpy Egg',
            '500'
        ],                        
    ]

    //menu
    function showMenu(main) {
        changeBg('menu-bg');

        dishes.forEach((dish) => {
           const menuCard = addElWithClass('div','dish-card');
           // photo of dish
           const dishPhotoDiv = addElWithClass('div','dish-photo');
           const dishPhoto = new Image();
           dishPhoto.src = dish[0];
           dishPhotoDiv.appendChild(dishPhoto);

           // description of dish
           const dishDescription = addElWithClass('div','dish-description');
           const dishH3 = document.createElement('h3');
           dishH3.innerText = dish[1];
           const p = document.createElement('p');
           p.innerText = `$${dish[2]} with VAT`;
           dishDescription.append(dishH3,p);

           // appending all elements
           menuCard.append(dishPhotoDiv,dishDescription);
           main.append(menuCard);
        });
    }

    animateFade(showMenu);
 
     return 'menu';
 };
 
 export default menu;

 // animate plates with step