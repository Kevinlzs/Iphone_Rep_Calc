let firstValue = 0;
let secondValue = 0;
let result = 0;
let width;
let fontSize
let operator;
let notDoneWithFirstValue = true;

document.getElementById("allClear").onclick = clear;

document.getElementById("plusOrNegative").onclick = plusOrNegative;

document.getElementById("one").onclick = one;

document.getElementById("two").onclick = two;

document.getElementById("three").onclick = three;

document.getElementById("four").onclick = four;

document.getElementById("five").onclick = five;

document.getElementById("six").onclick = six;

document.getElementById("seven").onclick = seven;

document.getElementById("eight").onclick = eight;

document.getElementById("nine").onclick = nine;

document.getElementById("zero").onclick = zero;

document.getElementById("percent").onclick = percent;

document.getElementById("period").onclick = period;

document.getElementById("divide").onclick = divide;

document.getElementById("multiply").onclick = multiply;

document.getElementById("subtract").onclick = subtract;

document.getElementById("add").onclick = add;

document.getElementById("equal").onclick = equal;

function clear(){
    firstValue = 0;
    secondValue = 0;
    result = 0;
    notDoneWithFirstValue = true;
    document.getElementById("answer").innerHTML = firstValue;
    document.getElementById("answer").style.fontSize = "70px";
}

function plusOrNegative(){
    if(notDoneWithFirstValue){
        firstValue = 0-firstValue;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue = 0-secondValue;
        document.getElementById("answer").innerHTML = secondValue;
    }
}

function percent(){
    if(notDoneWithFirstValue){
        firstValue /= 100;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue /= 100;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}

function period(){
    // firstValue = String(firstValue);
    // firstValue += ".";
    // firstValue = parseFloat(firstValue);
    // document.getElementById("answer").innerHTML = firstValue;
}

function equal(){
    if(operator == '/'){
        firstValue = firstValue/secondValue;
        secondValue = 0;
        notDoneWithFirstValue = true;
        document.getElementById("answer").innerHTML = firstValue;
        width = document.getElementById("answer").offsetWidth;
        if(width > 310){
            document.getElementById("answer").style.fontSize = "27px";
        }
    } else if(operator == '*'){
        firstValue = firstValue*secondValue;
        secondValue = 0;
        notDoneWithFirstValue = true;
        document.getElementById("answer").innerHTML = firstValue;
        width = document.getElementById("answer").offsetWidth;
        if(width > 310){
            document.getElementById("answer").style.fontSize = "27px";
        }
    } else if(operator == '+'){
        firstValue = firstValue+secondValue;
        secondValue = 0;
        notDoneWithFirstValue = true;
        document.getElementById("answer").innerHTML = firstValue;
        width = document.getElementById("answer").offsetWidth;
        if(width > 310){
            document.getElementById("answer").style.fontSize = "27px";
        }
    } else if(operator == '-'){
        firstValue = firstValue-secondValue;
        secondValue = 0;
        notDoneWithFirstValue = true;
        document.getElementById("answer").innerHTML = firstValue;
        width = document.getElementById("answer").offsetWidth;
        if(width > 310){
            document.getElementById("answer").style.fontSize = "27px";
        }
    }
}

function divide(){
    notDoneWithFirstValue = false;
    operator = '/';
}

function multiply(){
    notDoneWithFirstValue = false;
    operator = '*';
}

function add(){
    notDoneWithFirstValue = false;
    operator = '+';
}

function subtract(){
    notDoneWithFirstValue = false;
    operator = '-';
}
//parseFloat()
function one(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 1;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 1;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function two(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 2;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 2;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function three(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 3;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 3;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function four(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 4;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 4;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function five(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 5;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 5;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function six(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 6;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 6;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function seven(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 7;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 7;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function eight(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 8;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 8;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function nine(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 9;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 9;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}
function zero(){
    if(notDoneWithFirstValue){
        firstValue *= 10;
        firstValue += 0;
        document.getElementById("answer").innerHTML = firstValue;
    } else {
        secondValue *= 10;
        secondValue += 0;
        document.getElementById("answer").innerHTML = secondValue;
    }
    width = document.getElementById("answer").offsetWidth;
    if(width > 310){
        document.getElementById("answer").style.fontSize = "27px";
    }
}