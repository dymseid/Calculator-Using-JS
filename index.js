let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();  // Prevent form submission
        console.log(e.target.innerHTML, "Inside the event");
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML.toLowerCase() == 'ac'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML.toLowerCase() == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        console.log(input.value, "Inside the event2");
    })
})
