"use strict";

let flag = "";

const one = document.querySelector("#btn32");
const two = document.querySelector("#btn33");
const three = document.querySelector("#btn34");
const four = document.querySelector("#btn27");
const five = document.querySelector("#btn28");
const six = document.querySelector("#btn29");
const seven = document.querySelector("#btn22");
const eight = document.querySelector("#btn23");
const nine = document.querySelector("#btn24");
const zero = document.querySelector("#btn38");
const cleaner = document.querySelector("#btn6");
const back_arrow = document.querySelector("#btn7");
const sin = document.querySelector("#btn8");
const cos = document.querySelector("#btn9");
const tan = document.querySelector("#btn10");
const rad = document.querySelector("#btn11");
const abs = document.querySelector("#btn12");
const log = document.querySelector("#btn13");
const exp = document.querySelector("#btn14");
const mod = document.querySelector("#btn15");
const factorial = document.querySelector("#btn16");
const baraks = document.querySelector("#btn17");
const pi = document.querySelector("#btn18");
const ln = document.querySelector("#btn19");
const x2 = document.querySelector("#btn21");
const plus_minus = document.querySelector("#btn26");
const open_pranses = document.querySelector("#btn31");
const close_pranses = document.querySelector("#btn36");
const point = document.querySelector("#btn37");
const warningBox = document.querySelector(".warningBox");
const confirmWarningButton = document.querySelector(".confirmWarningButton");
const display = document.querySelector(".display");
const close = document.querySelector(".closeBtn");
const equal = document.querySelector("#btn39");
const plus = document.querySelector("#btn35");
const minus = document.querySelector("#btn30");
const divide = document.querySelector("#btn20");
const multiple = document.querySelector("#btn25");

one.addEventListener("click", function() {
    display.textContent = display.textContent + one.textContent;
});
two.addEventListener("click", function() {
    display.textContent = display.textContent + two.textContent;
});
three.addEventListener("click", function() {
    display.textContent = display.textContent + three.textContent;
});
four.addEventListener("click", function() {
    display.textContent = display.textContent + four.textContent;
});
five.addEventListener("click", function() {
    display.textContent = display.textContent + five.textContent;
});
six.addEventListener("click", function() {
    display.textContent = display.textContent + six.textContent;
});
seven.addEventListener("click", function() {
    display.textContent = display.textContent + seven.textContent;
});
eight.addEventListener("click", function() {
    display.textContent = display.textContent + eight.textContent;
});
nine.addEventListener("click", function() {
    display.textContent = display.textContent + nine.textContent;
});
zero.addEventListener("click", function() {
    display.textContent = display.textContent + zero.textContent;
});

cleaner.addEventListener("click", function() {
    display.textContent = "";
});

back_arrow.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    }
    let displayLength = display.textContent.length;

    if (displayLength > 1) {
        display.textContent = display.textContent.substring(0, displayLength - 1);
    } else {
        display.textContent = "";
    }
});

sin.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let sin_element = Math.sin(Number(display.textContent));
        display.textContent = sin_element;
        display.style.color = "#134611";
    }
});

confirmWarningButton.addEventListener("click", function() {
    warningBox.classList.add("hidden");
    warningBox.style.display = "none";
});

close.addEventListener("click", function() {
    warningBox.classList.add("hidden");
    warningBox.style.display = "none";
});

cos.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let cos_element = Math.cos(Number(display.textContent));
        display.textContent = cos_element;
        display.style.color = "#134611";
    }
});

tan.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let tan_element = Math.tan(Number(display.textContent));
        display.textContent = tan_element;
        display.style.color = "#134611";
    }
});

rad.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let rad_element = Math.sqrt(Number(display.textContent));
        display.textContent = rad_element;
        display.style.color = "#134611";
    }
});

abs.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let abs_element = Math.abs(Number(display.textContent));
        display.textContent = abs_element;
        display.style.color = "#134611";
    }
});

log.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let log_element = Math.log10(Number(display.textContent));
        display.textContent = log_element;
        display.style.color = "#134611";
    }
});

exp.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let exp_element = Math.exp(Number(display.textContent));
        display.textContent = exp_element;
        display.style.color = "#134611";
    }
});

let number1 = "";
let number2 = "";

mod.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        number1 = Number(display.textContent);
        display.textContent = "";
        flag = "%";
    }
});

factorial.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let fact = 1;
        for (let i = 1; i <= Number(display.textContent); i++) {
            fact *= i;
        }
        display.textContent = fact;
        display.style.color = "#134611";
    }
});

baraks.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let baraks_element = 1 / Number(display.textContent);
        display.textContent = baraks_element;
        display.style.color = "#134611";
    }
});

pi.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = Math.PI;
    } else {
        display.textContent = Number(display.textContent) * Math.PI;
    }
});

ln.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        let ln_element = Number(display.textContent) ** 3;
        display.textContent = ln_element;
        display.style.color = "#134611";
    }
});

x2.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        // warningBox.classList.add(".box");
        warningBox.classList.add("overlay");
    } else {
        let x2_element = Number(display.textContent) ** 2;
        display.textContent = x2_element;
        display.style.color = "#134611";
    }
});

plus_minus.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        if (Number(display.textContent) > 0) {
            display.textContent = Number(display.textContent) * -1;
        } else if (Number(display.textContent) < 0) {
            display.textContent = Number(display.textContent) * -1;
        }

        display.textContent = plus_minus_element;
        display.style.color = "#134611";
    }
});

open_pranses.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        display.textContent = display.textContent + open_pranses.textContent;
        display.style.color = "#134611";
    }
});

close_pranses.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        display.textContent = display.textContent + close_pranses.textContent;
        display.style.color = "#134611";
    }
});

point.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        display.textContent = display.textContent + point.textContent;
        display.style.color = "#134611";
    }
});

plus.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        number1 = Number(display.textContent);
        display.textContent = "";
        display.style.color = "#134611";
        flag = "+";
    }
});

minus.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        number1 = Number(display.textContent);
        display.style.color = "#134611";
        display.textContent = "";
        flag = "-";
    }
});

multiple.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        number1 = Number(display.textContent);
        display.style.color = "#134611";
        display.textContent = "";
        flag = "*";
    }
});

divide.addEventListener("click", function() {
    if (display.textContent == "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
        // warningBox.classList.add(".box");
    } else {
        number1 = Number(display.textContent);
        display.style.color = "#134611";
        display.textContent = "";
        flag = "/";
    }
});

equal.addEventListener("click", function() {
    if (display.textContent === "") {
        warningBox.classList.remove("hidden");
        warningBox.style.display = "block";
        warningBox.classList.add("overlay");
    }
    if (flag === "%") {
        number2 = Number(display.textContent);
        let mod_template = number1 % number2;
        console.log(mod_template);

        display.textContent = `${number1} mod ${number2} = ${mod_template}`;
    }

    if (flag === "+") {
        number2 = Number(display.textContent);
        let plus_template = number1 + number2;
        display.textContent = plus_template;
        display.style.color = "#134611";
    }

    if (flag === "-") {
        number2 = Number(display.textContent);
        let minus_template = number1 - number2;
        display.textContent = minus_template;
        display.style.color = "#134611";
    }

    if (flag === "*") {
        number2 = Number(display.textContent);
        let multiple_template = number1 * number2;
        display.textContent = multiple_template;
        display.style.color = "#134611";
    }

    if (flag === "/") {
        number2 = Number(display.textContent);
        let divide_template = number1 / number2;
        display.textContent = divide_template;
        display.style.color = "#134611";
    }
});