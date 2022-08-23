import { addElWithClass} from "./helpers";
import { animateFade, changeBg } from "./events";


const main = function(content) {
   //main
   changeBg();

    function showMain(main) {
        const h1 = addElWithClass('h1','teaser-logo');
        h1.innerText = 'Hoojambra';
        const p = document.createElement('p');
        p.innerText = 'The one & only place to eat, to sit and have a beat.'; 
        main.append(h1,p);
    }

    animateFade(showMain);
    return 'home';
};

export default main;