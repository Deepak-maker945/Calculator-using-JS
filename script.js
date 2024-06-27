let string = '';
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function(e){
        console.log(e.target);
        if (e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }
        else if (e.target.innerHTML == "AC"){
            string = "";
            display.value = string;
        }
        else if (e.target.innerHTML == "Back"){
            string = string.slice(0, -1);
            display.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }
    })
})