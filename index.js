
function add(num1,num2){
    num1 = +num1
    num2 = +num2
    let sum = num1 + num2
    return sum 
}

function subtract(num1,num2){
    num1 = +num1
    num2 = +num2
    let sub = num1 - num2
    return sub
}

function multiply(num1,num2){
    num1 = +num1
    num2 = +num2
    let mult = num1 * num2
    return mult
}


function divide(num1,num2){
    num1 = +num1
    num2 = +num2
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
const pointbtn = document.querySelector('.point')
const btnOp = document.querySelectorAll('.op')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const delBtn = document.querySelector('.del')
const per = document.querySelector('.percentage')

let firstNumber = ''
let operator = ''
let secondNumber = ''
let displayValue = ''
let result;
let pressOp = false
let numpress = false
let dotpress = true


btnNum.forEach(x =>{
    x.addEventListener('click',displayNum)
})
btnOp.forEach(x => {
    x.addEventListener('click',displayOp)
})

equal.addEventListener('click',total)
pointbtn.addEventListener('click',point)
clear.addEventListener('click',allClear)
delBtn.addEventListener('click',del)


function allClear(){
    displayValue = ''
    firstNumber = ''
    operator = ''
    secondNumber = ''
    result = ''
    display.textContent = '0'
    pressOp = false
    numpress = false
    dotpress = true
}

function del(){
    if(operator === ''){
        displayValue = displayValue.slice(0,-1)
        firstNumber = displayValue
        if(!firstNumber.includes('.'))
            dotpress = true
        display.textContent = firstNumber
        console.log(`${firstNumber} ${operator} ${secondNumber}`)
    }else{
        displayValue = displayValue.slice(0,-1)
        secondNumber = displayValue
        if(!secondNumber.includes('.'))
            dotpress = true
        display.textContent = secondNumber
        console.log(secondNumber)
        console.log(`${firstNumber} ${operator} ${secondNumber}`)
    }  
}

function displayNum(num){
    numpress = true
    let valueNum = num.target.textContent
    displayValue += valueNum 

    if(displayValue.length >= 8){
        displayValue = displayValue.slice(0,9)
    }
    display.textContent = displayValue
    if(operator === ''){
        firstNumber = displayValue
        
    }else{
        secondNumber = displayValue
        if(!secondNumber.includes('.'))
        dotpress = true
        pressOp = true
    }
    if(pressOp === true){
        console.log(`${firstNumber} ${operator} ${secondNumber}`)
        result = operate(firstNumber,operator,secondNumber)
        let roundresult = String(result)
        if(roundresult.length >= 9){
            roundresult = roundresult.slice(0,9)
            result = roundresult
            roundresult = ''
        }
    }
}
function point(dot){
    if(dotpress === true){
        if(numpress === false){
            displayValue = '0'
        }
        let valuedot = dot.target.textContent
        displayValue += valuedot  
        display.textContent = displayValue
        dotpress = false
    }
}
function displayOp(op){
    let valueOp = op.target.textContent
    operator = valueOp
    displayValue = ''
    if(pressOp == true){
        display.textContent = result
        firstNumber = result
        pressOp = false
    }
    
}
function total(){
    if( firstNumber === '' || operator === '' || secondNumber === ''){
        displayValue = ''
        display.textContent = 'invalid'
    }else if(result === Infinity){
        display.textContent = 'Dead'
        displayValue = ''
        firstNumber = ''
        operator = ''
        secondNumber = ''
        result = ''
        pressOp = false
        numpress = false
        dotpress = true
    }
    else{
        console.log(`${firstNumber} ${operator} ${secondNumber}`)
        result = operate(firstNumber,operator,secondNumber)
        console.log(result)
        let roundresult = String(result)
        if(roundresult.length >= 9){
            roundresult = roundresult.slice(0,9)
            result = roundresult
            roundresult = ''
        }
        display.textContent = result
        displayValue = ''
        firstNumber = ''
        secondNumber = ''
    }
    
}