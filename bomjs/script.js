
// function storeData(name, data) {
//     localStorage.setItem(name, data);
// }

// function readData(name) {
//     if (localStorage.getItem(name)) {
//         console.log(localStorage.getItem(name));
//     };
// }

// function deleteData(name) {
//     localStorage.removeItem(name);
// }

// storeData('something', 'Some value!');
// let read = readData('something');
// console.log(read);
// deleteData('something');
// read = readData('something');
// console.log(read);


function storeData(name, data) {
    sessionStorage.setItem(name, data);
}

function readData(name) {
    if (sessionStorage.getItem(name)) {
        console.log(sessionStorage.getItem(name));
    };
}

function deleteData(name) {
    sessionStorage.removeItem(name);
}

// storeData('something', 'Some value!');
// let read = readData('something');
// console.log(read);
// deleteData('something');
// read = readData('something');
// console.log(read);
