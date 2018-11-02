
function createSelect(options, node) {
    var select = document.createElement('select');
    var option;
    for (var i = 0; i < options.length; i++) {
        option = document.createElement('option');
        option.textContent = options[i];
        select.appendChild(option);
    };
    node.appendChild(select);
}

var options = [1, 2, 3, 4, 5];
var first = document.querySelector('#first');
var second = document.querySelector('div:last-of-type');
createSelect(options, first);
createSelect(options, second);