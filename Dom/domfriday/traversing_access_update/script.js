
function removeClass() {
    document.querySelector('li.active').className = '';
    document.querySelector('div ul li').className = 'active';
}

removeClass();

function createAlert() {
    alert(document.querySelector('div ul li').textContent);
}

createAlert();

function replaceText(text) {
    document.querySelector('ul:last-of-type li:last-of-type').textContent = text;
}

replaceText('Some text!');