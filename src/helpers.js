function addElWithClass(el,cl) {
    el = document.createElement(el);
    el.classList.add(cl);
    return el;
}

function capitalizer(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export {
    addElWithClass,
    capitalizer,
};