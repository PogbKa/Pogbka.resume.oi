let poput = document.getElementById('poput');
let myForm = document.getElementById('myForm');
let openButton = document.getElementById('openButton');
function openForm () {
    poput.style.left = "0";
    myForm.style.bottom = '5%';
    openButton.style.display = "none"
}
function closeForm () {
    poput.style.left = "-110%";
    myForm.style.bottom = '-100%';
    openButton.style.display = "flex"
}