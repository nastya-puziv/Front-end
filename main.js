let range = document.querySelector('#range');
let input = document.querySelector('#input');

let green = document.querySelector('.green');
let red = document.querySelector('.red');

function calculator(){
    green.style.height = range.value + 'px';
    if(range.value < 20){
        red.style.height = (range.value * 0.02) + 'px'}
    else if(range.value > 20 && range.value < 50){
        red.style.height = (range.value * 0.04) + 'px'}
    else if(range.value > 50 && range.value < 75){
        red.style.height = (range.value * 0.06) + 'px'}
    else if(range.value > 75 && range.value < 100){
        red.style.height = (range.value * 0.08) + 'px'}
    }

range.oninput = function(){
    input.value = range.value;
    calculator();
};
input.oninput = function(){
    range.value = input.value;
    calculator();
};