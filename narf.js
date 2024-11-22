// BASIC FUNCTIONS

function elem(selector) {
    return document.querySelector(selector)
}

function elems(selector) {
    return document.querySelectorAll(selector)
}


// EXTRA FUNCTIONS
// Extra is not complete, I'm still working on it and it can change

// Get/set the text content of an element
function elemText(selector, text = null) {
    // get element text
    if (text === null) {
        return elem(selector).textContent;
    }
    // set element text
    elem(selector).textContent = text;
}

function elemsText(selector, elemIndex, text = null) {
    if (elemIndex === 'all') {
        // get all elements text
        if (text === null) {
            return Array.from(elems(selector)).map(elem => elem.textContent);
        }
        // set all elements text
        elems(selector).forEach(elem => elem.textContent = text);
    } else {
        // get element[index] text
        if (text === null) {
            return elems(selector)[elemIndex].textContent;
        }
        // set element[index] text
        elems(selector)[elemIndex].textContent = text;
    }
}

// Get/set the inner HTML of an element
function elemHtml(selector, html = null) {
    // get element html
    if (html === null) {
        return elem(selector).innerHTML;
    }
    // set element html
    elem(selector).innerHTML = html;
}

function elemsHtml(selector, elemIndex, html = null) {
    if (elemIndex === 'all') {
        // get all elements html
        if (html === null) {
            return Array.from(elems(selector)).map(elem => elem.innerHTML);
        }
        // set all elements html
        elems(selector).forEach(elem => elem.innerHTML = html);
    } else {
        // get element[index] html
        if (html === null) {
            return elems(selector)[elemIndex].innerHTML;
        }
        // set element[index] html
        elems(selector)[elemIndex].innerHTML = html;
    }
}

// Show an element
function elemShow(selector) {
    elem(selector).style.visibility = 'visible';
}

// Hide an element
function elemHide(selector) {
    elem(selector).style.visibility = 'hidden';
}
