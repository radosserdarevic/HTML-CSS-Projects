function toggle() {
    var $body = document.querySelector('body');
    $body.classList.toggle('background');
}

var hasRunningInterval;
var setInterval;
function automatic() {
    if (!hasRunningInterval) {
        hasRunningInterval = setInterval(toggle, 1000);
    };
}

function turnOff() {
    clearInterval(setInterval);
    hasRunningInterval = null;
}