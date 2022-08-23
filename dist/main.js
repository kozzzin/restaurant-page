/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\n\nconst contacts = function() {\n    (0,_events__WEBPACK_IMPORTED_MODULE_1__.changeBg)('contacts-bg');\n\n    function showContacts() {\n        const h1 = document.createElement('h1');\n        h1.classList.add('teaser-logo');\n        h1.innerText = 'See you';\n        const p = document.createElement('p');\n        p.innerText = 'We\\'re waiting for you here. You\\'re very welcome.'; \n        main.append(h1,p);   \n    }\n\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n     (0,_events__WEBPACK_IMPORTED_MODULE_1__.animateFade)(showContacts);\n \n     return 'contacts';\n };\n \n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n \n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateFade\": () => (/* binding */ animateFade),\n/* harmony export */   \"changeBg\": () => (/* binding */ changeBg),\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"markCurrent\": () => (/* binding */ markCurrent),\n/* harmony export */   \"menuClick\": () => (/* binding */ menuClick),\n/* harmony export */   \"showBottomLogo\": () => (/* binding */ showBottomLogo)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\n// import main from \"./main\";\n// import menu from \"./menu\";\n// import contacts from \"./contacts\";\n\nfunction animateFade(toDo) {\n    const main = document.querySelector('main');\n    main.classList.remove('show');\n    main.classList.add('hide');\n    main.classList.add('main-content');\n\n    setTimeout(function() {    \n        main.innerHTML = '';\n        toDo(main)\n        main.classList.remove('hide');\n        main.classList.add('show');\n    }, 400);\n}\n\nfunction changeBg(cl) {\n    const mainContainer = document.querySelector('.main-container')\n        mainContainer.className = '';\n        if (cl != undefined) {\n            mainContainer.classList.add('main-container',cl);\n        } else {\n            mainContainer.classList.add('main-container');\n        }\n}\n\nfunction markCurrent(current) {\n    const links = document.querySelectorAll('#menu li a');\n    links.forEach((link) => {\n        if (link.classList.contains(current)) {\n            link.classList.add('active');\n        } else {\n            link.classList.remove('active');\n        }\n    });\n}\n\nconst load = {\n    'home': () => {(0,_template__WEBPACK_IMPORTED_MODULE_0__.main)()},\n    'menu': () => {(0,_template__WEBPACK_IMPORTED_MODULE_0__.menu)()},\n    'contacts': () => {(0,_template__WEBPACK_IMPORTED_MODULE_0__.contacts)()},\n    'header': () => {(0,_template__WEBPACK_IMPORTED_MODULE_0__.header)()},\n    'footer': () => {(0,_template__WEBPACK_IMPORTED_MODULE_0__.footer)()},\n    content(target) {\n        if (this.hasOwnProperty(target)) {\n            const action = this[target];\n            action();\n        } else {\n            console.log('404 -- page not found');\n        }\n    }\n}\n\n\nfunction menuClick(event) {\n    const target = event.target.classList[0];\n    markCurrent(target);\n    load.content(target);\n    showBottomLogo(target);\n}\n\nfunction showBottomLogo(current) {\n    const bottomLogo = document.querySelector('.bottom-logo');\n    if (current != 'home') {\n        setTimeout(function() {\n            bottomLogo.classList.remove('hide');\n            bottomLogo.classList.add('show');\n        },400);\n    } else {\n            bottomLogo.classList.remove('show');\n            bottomLogo.classList.add('hide');\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/events.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElWithClass\": () => (/* binding */ addElWithClass),\n/* harmony export */   \"capitalizer\": () => (/* binding */ capitalizer)\n/* harmony export */ });\nfunction addElWithClass(el,cl) {\n    el = document.createElement(el);\n    el.classList.add(cl);\n    return el;\n}\n\nfunction capitalizer(str) {\n    return str[0].toUpperCase() + str.slice(1);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\ndocument.addEventListener('DOMContentLoaded',(e) => {\n    // header\n    _events__WEBPACK_IMPORTED_MODULE_0__.load.content('header');\n\n    // MAIN\n    const main = document.createElement('main');\n    document.querySelector('#content').appendChild(main); \n    // let current = main();\n    (0,_events__WEBPACK_IMPORTED_MODULE_0__.markCurrent)('home');\n    _events__WEBPACK_IMPORTED_MODULE_0__.load.content('home');\n\n    _events__WEBPACK_IMPORTED_MODULE_0__.load.content('footer');\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\n\nconst main = function(content) {\n   //main\n   (0,_events__WEBPACK_IMPORTED_MODULE_1__.changeBg)();\n\n    function showMain(main) {\n        const h1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('h1','teaser-logo');\n        h1.innerText = 'Hoojambra';\n        const p = document.createElement('p');\n        p.innerText = 'The one & only place to eat, to sit and have a beat.'; \n        main.append(h1,p);\n    }\n\n    (0,_events__WEBPACK_IMPORTED_MODULE_1__.animateFade)(showMain);\n    return 'home';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://restaurant-page/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\nconst menu = function() {\n    //dishes\n    const dishes = [\n        [\n            './img/dish01.png',\n            'Morning Sprouts',\n            '1200'\n        ],\n        [\n            './img/dish02.png',\n            'Late Breakfast',\n            '600'\n        ],\n        [\n            './img/dish03.png',\n            'Salmonella',\n            '1900'\n        ],\n        [\n            './img/dish04.png',\n            'Jamonessa',\n            '2200'\n        ],\n        [\n            './img/dish05.png',\n            'Shtimpy Egg',\n            '500'\n        ],                        \n    ]\n\n    //menu\n    function showMenu(main) {\n        ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.changeBg)('menu-bg');\n\n        dishes.forEach((dish) => {\n           const menuCard = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('div','dish-card');\n           // photo of dish\n           const dishPhotoDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('div','dish-photo');\n           const dishPhoto = new Image();\n           dishPhoto.src = dish[0];\n           dishPhotoDiv.appendChild(dishPhoto);\n\n           // description of dish\n           const dishDescription = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('div','dish-description');\n           const dishH3 = document.createElement('h3');\n           dishH3.innerText = dish[1];\n           const p = document.createElement('p');\n           p.innerText = `$${dish[2]} with VAT`;\n           dishDescription.append(dishH3,p);\n\n           // appending all elements\n           menuCard.append(dishPhotoDiv,dishDescription);\n           main.append(menuCard);\n        });\n    }\n\n    (0,_events__WEBPACK_IMPORTED_MODULE_1__.animateFade)(showMenu);\n \n     return 'menu';\n };\n \n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n // animate plates with step\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contacts\": () => (/* reexport safe */ _contacts__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"main\": () => (/* reexport safe */ _main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"menu\": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\nfunction header() {\n    const header = document.createElement('header');\n    const menu = document.createElement('ul');\n    menu.setAttribute('id','menu');\n    const menuItems = ['home','menu','contacts'];\n    menuItems.forEach((el) => {\n        const li = document.createElement('li');\n        const a = document.createElement('a');\n        a.classList.add(`${el}`);\n        a.setAttribute('href',`#${el}`);\n        a.innerText = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.capitalizer)(el);\n        a.addEventListener('click',_events__WEBPACK_IMPORTED_MODULE_1__.menuClick);\n        li.appendChild(a);\n        menu.appendChild(li);\n    });\n\n    header.appendChild(menu);\n\n    document.querySelector('#content').append(header);  \n}\n\nfunction footer() {\n     // footer\n     const footer = document.createElement('footer');\n     const adress = document.createElement('p');\n     adress.innerHTML = '<strong>Kyiv, Ukraine</strong><br>Big Street, 25';\n     const hours = document.createElement('p');\n     hours.innerHTML = '<strong>10:00-22:00</strong><br>Monday-Sunday';\n     const contact = document.createElement('p');\n     contact.innerHTML = '<strong>Call for reserves:</strong><br>+38 098 998-88-77';\n \n     //adding logo to footer\n     const footerLogo = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('div','bottom-logo');\n     footerLogo.classList.add('hide');\n     const footerH2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('h2');\n     footerH2.innerText = 'Hoojambra';\n     const footerSpan = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElWithClass)('span');\n     footerSpan.innerText = 'restaurant';\n     footerLogo.append(footerH2,footerSpan);\n \n     footer.append(footerLogo,adress,hours,contact);\n \n     document.querySelector('#content').append(footer); \n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/template.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;