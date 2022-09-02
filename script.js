"use strict";
let hasCalculated;

let flag = "";

const mainNumbersEls = document.querySelectorAll(".main-number");
const advancedMathEls = document.querySelectorAll(".advanced-math");
const simpleMathEls = document.querySelectorAll(".simple-math");
const cleaner = document.querySelector("#btn6");
const back_arrow = document.querySelector("#btn7");
const pi = document.querySelector("#btn18");
const warningBox = document.querySelector(".warningBox");
const confirmWarningButton = document.querySelector(".confirmWarningButton");
const display = document.querySelector(".display");
const close = document.querySelector(".closeBtn");
const equal = document.querySelector("#btn39");

const displayNumber = (numberEl) => {
    numberEl.addEventListener("click", function() {
        display.textContent += numberEl.textContent;
    });
}
//add click event to the element and then add the number to the display
mainNumbersEls.forEach(element => {
    element.addEventListener("click", function() {
        if (hasCalculated) {
            display.textContent = "";
            display.textContent += element.textContent;
            hasCalculated = false;
        }else
            display.textContent += element.textContent;
    })
})

function displayWarningBox () {
    warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
}

cleaner.addEventListener("click", function() {
    display.textContent = "";
    display.style.color = "rgb(67, 67, 67)";
});

back_arrow.addEventListener("click", function() {
    if (display.textContent == "") {
        displayWarningBox ();
    }
    let displayLength = display.textContent.length;

    if (displayLength > 1) {
        display.textContent = display.textContent.substring(0, displayLength - 1);
    } else {
        display.textContent = "";
    }
    display.style.color = "rgb(67, 67, 67)";
});

advancedMathEls.forEach(element => {
    element.addEventListener("click", function(event) {
        if (display.textContent == "") {
            displayWarningBox ();
        } else {
            let action = event.target.classList[0];
            const result = setAction(action);
            display.textContent = result;
            display.style.color = "green";
            hasCalculated = true;
        }
    })
})
function setAction(action) {
    let elementAction;
    switch (action) {
        case "sin":
            elementAction = Math.sin(Number(display.textContent));
            break;
        case "cos":
            elementAction = Math.cos(Number(display.textContent));
            break;
        case "tan":
            elementAction = Math.tan(Number(display.textContent));
            break;
        case "rad":
            elementAction = Math.sqrt(Number(display.textContent));
            break;
        case "abs":
            elementAction = Math.abs(Number(display.textContent));
            break;
        case "log":
            elementAction = Math.log10(Number(display.textContent));
            break;
        case "exp":
            elementAction = Math.exp(Number(display.textContent));
            break;
    }
    return elementAction;
}

confirmWarningButton.addEventListener("click", function() {
    warningBox.classList.add("hidden");
    warningBox.style.display = "none";
});

close.addEventListener("click", function() {
    warningBox.classList.add("hidden");
    warningBox.style.display = "none";
});

let number1 = "";
let number2 = "";

simpleMathEls.forEach(element => {
    element.addEventListener("click" , function(e) {
        if (display.textContent == "") {
            displayWarningBox ();
        }else
            actionSetter(e.target.innerText) 
    })
})

function actionSetter(action) {
    switch (action) {
        case "%": 
            number1 = Number(display.textContent);
            display.textContent = "";
            flag = "%";
            break;
        case "+":
            number1 = Number(display.textContent);
            display.textContent = "";
            flag = "+";
            break;
        case "-":
            number1 = Number(display.textContent);
            display.textContent = "";
            flag = "-";
            break;
        case "×":
            number1 = Number(display.textContent);
            display.textContent = "";
            flag = "*";
            break;
        case "÷":
            number1 = Number(display.textContent);
            display.textContent = "";
            flag = "/";
            break;
        case "n!":
            let fact = 1;
            for (let i = 1; i <= Number(display.textContent); i++) {
                fact *= i;
            }
            display.textContent = fact;
            break;
        case "1/x":
            let baraks_element = 1 / Number(display.textContent);
            display.textContent = baraks_element;
            break;
        case "x^3":
            let ln_element = Number(display.textContent) ** 3;
            display.textContent = ln_element;
            break;
        case "x^2":
            let x2_element = Number(display.textContent) ** 2;
            display.textContent = x2_element;
            break;
        case "±":
            if (Number(display.textContent) > 0) {
                display.textContent = Number(display.textContent) * -1;
            } else if (Number(display.textContent) < 0) {
                display.textContent = Number(display.textContent) * -1;
            }
            break;
        case "(":
            display.textContent = display.textContent + action;
            break;
        case ")":
            display.textContent = display.textContent + action;
            break;
        case ".":
            display.textContent = display.textContent + action;
            break;
    }
}

pi.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = Math.PI;
    }else if(display.textContent == "" && !number1 =="") {
        number2 = Number(display.textContent);
    }else {
        display.textContent = Number(display.textContent) * Math.PI;
    }
});

equal.addEventListener("click", function() {
    if (display.textContent === "") {
        displayWarningBox ();
    }else{
        number2 = Number(display.textContent);
        switch (flag) {
            case "%": 
                let mod_template = number1 % number2;
                display.textContent = `${number1} mod ${number2} = ${mod_template}`;
                hasCalculated = true;
                break;
            case "+":
                let plus_template = number1 + number2;
                display.textContent = plus_template;
                break;
            case "-":
                let minus_template = number1 - number2;
                display.textContent = minus_template;
                break;
            case "*":
                let multiple_template = number1 * number2;
                display.textContent = multiple_template;
                break;
            case "/":
                let divide_template = number1 / number2;
                display.textContent = divide_template;
                break;
        }
        display.style.color = "green";
    }
});