
var $chat = document.querySelector('#chat');
var $input = document.querySelector('#input');
var $send = document.querySelector('#send');

$send.onclick = function () {
    var $p = document.createElement('p');
    var $span = document.createElement('span');
    $span.textContent = $input.value;
    $p.appendChild($span)
    $chat.appendChild($p);
    $input.value = '';
}