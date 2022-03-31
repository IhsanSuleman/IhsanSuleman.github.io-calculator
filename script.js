const calcScreen =document.querySelector('.calculator-screen');
const updateScreen = (number) =>{
    calcScreen.value =number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=>{
        updateScreen(event.target.value); 
    });
});

let prevNumber = "";
let calcOperator = "";
let currNumber = "";

const inputNumber = (number) =>{
    if(currNumber === "0"){
        currNumber = number;
    }else{
        currNumber += number;
    }
};

numbers.forEach((number) =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currNumber);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) =>{
    prevNumber = currNumber;
    calcOperator = operator;
    currNumber = "";
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () =>{
    calculate();
    updateScreen(currNumber);
});

const calculate = () =>{
    let result = "";
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currNumber);
            break;
        default:
            break;
    }
    currNumber = result;
    calcOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currNumber);
});

const clearAll = () =>{
    prevNumber = "";
    calcOperator = "";
    currNumber = "0";
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currNumber);
});
inputDecimal = (dot) =>{
    if(currNumber.includes('.')){
        return;
    }
    currNumber += dot;
};
const percent = document.querySelector('.percentage');
const inputPercent = () => {
    currNumber += percent
    percentResult = 0.01 * parseFloat(currNumber);
    currNumber = percentResult;
}

percent.addEventListener('click', (event) => {
    inputPercent(event.target.value);
    updateScreen(currNumber);
});
