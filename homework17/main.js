let inputs = document.querySelectorAll('.form input');
let textarea = document.querySelector('.form textarea');

setInterval(function valueToTextArea(){
    inputs.forEach(input => {
        if (input.value){
            textarea.value += input.value + ', ';
        }
    })
},4000);

