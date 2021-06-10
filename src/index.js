console.log('Navigator here!');

export var createForm = function() {
    var formHTML = '<input class="form-control" type="text" id="my-input" /><button id="btn">BUTTON</button>';
    document.querySelector('body').innerHTML += formHTML;
}