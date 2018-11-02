
function validateForm() {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('required')) {
            inputs[i].classList.toggle('border');
        };
    };
}

validateForm();