
function add(num1,num2){
    num1 = +num1
    num2 = +num2
    let sum = num1 + num2
    return sum 
}

function subtract(num1,num2){
    let sub = num1 - num2
    return sub
}

function multiply(num1,num2){
    let mult = num1 * num2
    return mult
}


function divide(num1,num2){
    let divide = num1/num2
    return divide
}

function operate(first,op,second){
    if(op ==='+'){
        return add(first,second)
    }
    else if(op === '-'){
        return subtract(first,second)
    }
    else if(op === 'x'){
        return multiply(first,second)

    }else if(op === '/'){
        return divide(first,second)
    }
}

const btnNum = document.querySelectorAll('.num')
const display = document.querySelector('.display')
const btnOp = document.querySelectorAll('.op')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')

let firstNumber;
let operator;
let secondNumber;
let displayNum =''
let result;
let consecutive = []
let press = false
let check = false 


btnNum.forEach(x => {
    x.addEventListener('click',num)
})
btnOp.forEach(x=> {
    x.addEventListener('click',op)
})

equal.addEventListener('click',cal)
clear.addEventListener('click',clearAll)

function clearAll(){
    display.textContent = '0'
    displayNum = ''
    consecutive = []
    press = false
    check = false
    result;
}

function num(e){
    check = true
    let value = e.target.textContent
    displayNum += value
    if(displayNum.length <= 9){
        display.textContent = displayNum
        if(press === true){
            secondNumber = displayNum
            secondNumber = +secondNumber
        }else{
            firstNumber = displayNum
            firstNumber = +firstNumber
        }  
    }
    
    if(firstNumber && secondNumber && operator !== 0){
        firstNumber = +firstNumber
        secondNumber = +secondNumber
        result = operate(firstNumber,operator,secondNumber)
        let roundresult1 = String(result)
        if(roundresult1.length > 8){
            result = roundresult1.slice(0,9)
            roundresult1 = ''
        }
       
    }

}
function op(e){
    
    if(check === true){
    press = true
    let value2 = e.target.textContent
    operator = value2
    consecutive.push(operator)
    displayNum = ''
    if(consecutive.length > 1){
        firstNumber = result
        console.log(firstNumber)
        display.textContent = result
        
        }
    }
}
function cal(){
    firstNumber = +firstNumber
    secondNumber = +secondNumber
    console.log( firstNumber)
    console.log(operator)
    console.log( secondNumber)
    result = operate(firstNumber,operator,secondNumber)
    console.log(typeof result)
    let roundresult = String(result)
    if(roundresult.length >= 8){
        result = roundresult.slice(0,9)
        roundresult = ''
    }
    if(result === Infinity){
        display.textContent = 'Dead'
        displayNum = ''
        consecutive = []
        press = false
        check = false
    }
    else{
        if(operator === undefined){
            display.textContent = '0'
        }else{
            display.textContent = result
        }
    }
        
}