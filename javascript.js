/* get all the elements you need to manipulate*/
const cache = document.getElementById('cache')
const input = document.getElementById('input')

const AC = document.getElementById('clear')
const del = document.getElementById('delete')
const posNeg = document.getElementById('posNeg')
const division = document.getElementById('division')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const multiplication = document.getElementById('multiplication')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const subtraction = document.getElementById('subtraction')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const addition = document.getElementById('addition')
const zero = document.getElementById('zero')
const decimal = document.getElementById('decimal')
const equals = document.getElementById('equals')


/* add event listeners to all the buttons */
const numbers = document.getElementsByClassName('numbers')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',() => addInput(i));
}
del.addEventListener('click', () => backspace())
AC.addEventListener('click', () => allClear())
posNeg.addEventListener('click',() => addInput('-'))
division.addEventListener('click',() => evaluate(division.textContent))
multiplication.addEventListener('click',() => evaluate(multiplication.textContent))
subtraction.addEventListener('click',() => evaluate(subtraction.textContent))
addition.addEventListener('click',() => evaluate(addition.textContent))
equals.addEventListener('click',() => evaluate(equals.textContent))


function addInput(i){
    
    if ((input.innerHTML == "Calculator") || (input.innerHTML == "000")){
        input.innerHTML = numbers[i].textContent
    }
    else if ((input.innerHTML.includes('.')) && (numbers[i].textContent == ".")) {
        alert('You can only use one decimal per number.')
    }
    else if (i == "-") {
        if (input.innerHTML.charAt(0) == "-") {
            input.innerHTML = input.innerHTML.replace('-', '')
            if (cache.innerHTML != "000"){
                cache.innerHTML = cache.innerHTML.replace('-', '')
                }

        }
        else {
            input.innerHTML = "-" + input.innerHTML
            if (cache.innerHTML != "000"){
                cache.innerHTML = cache.innerHTML.replace('-', '')
                }
        }
    }
    else if (input.innerHTML.length > 18) {
        return
    }
    else {
        input.innerHTML += numbers[i].textContent
    }
}

function backspace(){

    if (input.innerHTML.length == 0){
        return
    }
    if (input.innerHTML == "Calculator"){
        return
    }
    if (input.innerHTML.length == 1){
        input.innerHTML = "Calculator!"
    }
    if ((input.innerHTML.length == 2) && (input.innerHTML.charAt(0) == "-")){
        input.innerHTML = "Calculator"
    }
    else{
        let arr  = input.innerHTML.split("")
        arr.pop() 
        arr = arr.join('')
        input.innerHTML = String(arr)
    }
}

function allClear(){

    input.innerHTML = "Calculator"
    cache.innerHTML = "000"
}

function evaluate(string){

    if ((string == "x") || (string == '%') || (string == '-') || (string == '+')){
        if (cache.innerHTML == "000"){
            let inputInt = parseInt(input.innerHTML)
            cache.innerHTML = inputInt + " " + string
            input.innerHTML = "000"
        }
        else if ((cache.innerHTML.charAt(cache.innerHTML.length-1) == "x") || 
        (cache.innerHTML.charAt(cache.innerHTML.length-1) == "%") || 
        (cache.innerHTML.charAt(cache.innerHTML.length-1) == "-") || 
        (cache.innerHTML.charAt(cache.innerHTML.length-1) == "+")){
            let operator = cache.innerHTML.charAt(cache.innerHTML.length-1)
            let oldInt = parseInt(cache.innerHTML.slice(0,cache.innerHTML.length-2))
            let newInt = parseInt(input.innerHTML)

            if (operator == "x"){
                let output = oldInt*newInt
                cache.innerHTML = output + " " + string
                input.innerHTML = "000"
                return
            }
            else if (operator == "%"){
                let output = oldInt/newInt
                cache.innerHTML = output + " " + string
                input.innerHTML = "000"
                return    
            }
            else if (operator == "-"){
                let output = oldInt-newInt
                cache.innerHTML = output + " " + string
                input.innerHTML = "000"
                return
            }
            else {
                let output = oldInt+newInt
                cache.innerHTML = output + " " + string
                input.innerHTML = "000"
                return
            }
        }
        else{
            cache.innerHTML = cache.innerHTML + " " + string
            input.innerHTML = "000"
        }
    
    }
    else if (cache.innerHTML != "000"){
        let operator = cache.innerHTML.charAt(cache.innerHTML.length-1)
        let oldInt = parseInt(cache.innerHTML.slice(0,cache.innerHTML.length-2))
        let newInt = parseInt(input.innerHTML)

        if (operator == "x"){
            let output = oldInt*newInt
            cache.innerHTML = output
            input.innerHTML = output
            return
        }
        else if (operator == "%"){
            if (newInt == 0){
                alert("Cannot divide by zero!")
                input.innerHTML = "000"
            }
            else{
                let output = oldInt/newInt
                cache.innerHTML = output
                input.innerHTML = output
                return    
            }

        }
        else if (operator == "-"){
            let output = oldInt-newInt
            cache.innerHTML = output
            input.innerHTML = output
            return
        }
        else if (operator == "+"){
            let output = oldInt+newInt
            cache.innerHTML = output
            input.innerHTML = output
            return
        }
        else{
            return
            }
    }
    else{
        let inputInt = parseInt(input.innerHTML)
        cache.innerHTML = inputInt + " " + string
        input.innerHTML = "000"
    }
     
}