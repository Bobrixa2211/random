let btnGener = document.querySelector('.btn-gener'); 
let ot = document.querySelector('#ot')
let doo = document.querySelector('#doo')
let number = document.querySelector('.number');
let min;
let max;
ot.addEventListener('click', function(){
    min = ot.value
})
doo.addEventListener('click', function(){
    max = doo.value
})
function getRandomInt(min, max) { 
    min = Math.ceil(ot.value)
    max = Math.floor(doo.value)
    return Math.floor(Math.random() * (max - min + 1)) + min}
btnGener.addEventListener('click', function(){ 
    let a = getRandomInt(min, max); 
    number.innerHTML = a; 
});
