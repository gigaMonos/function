/*
//Функция вывода сообщения
function showMessage() {
    console.log('Message');
}
showMessage(); //для того, чтобы функция работала 
//ее нужно вызвать
//Вложеность и видимость функций 
function getSumm(){
    let numOne, numTwo;
    function getNumOne (){
        numOne = 1;
    }
    function getNumTwo(){
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSum = numOne + numTwo;
    console.log(numSum);
}
getSumm();

//пареметры
function calcSumm (numOne, numTwo){
    console.log(`numOne: ${numOne}`);
    console.log(`numTwo: ${numTwo}`);
    let numSumm = numOne + numTwo;
    console.log(`Summa:${numSumm}`);
}

calcSumm(1,2)
//функции CAll BaCK
function calcSumm (numOne, numTwo,less, more){
    let numSumm = numSumm + numTwo;
    if(numSumm > 3){
        more();
    }else{
        less();
    }

    function showMessage (){
        console.log('biggest');
    }
    function showLessMessage(){
        console.log('less then 3');
    }
}
calcSumm(1, 5, showMessage, showLessMessage);

// Return Result
function calcSumm(numOne, numTwo){
    let numSumm = numOne + numTwo;
    return numSumm; //резултат мы можем 
    //получить присвоив новой переменной функцию
    //останавливает код
}
let funcRezult = calcSumm(1,2);
console.log(`summa: ${funcRezult}`);

let showMessage = function(){
    console.log('Hello!');
};
showMessage();

function getSumm(){
    let summ = 1 + 2;
    console.log(summ);
};
let someVar = getSumm;
someVar();
getSumm();

//Многострочная стрелочная функция
let getMassege = (text, name) =>//стрелка особености синтаксиса {
    let message = text  + ', ' //пробел и запятая + name + '!';
    return message; 
};
console.log(getMassege('Hello', 'Pitter'));//функция с параметрами

//Однострочная стрелочная функция
let getMassege = (text, name) => text + ', ' + name +'!';
console.log(getMassege('Hello', 'World'));

// Планирование setTimeout i setInterval 
function showMessage(text, name){
    console.log(`${text}, ${name}!`);
}
setTimeout(showMessage, 3000, 'Hello', 'World');
 
//Рекурсия и setTimeout для точной работы интервала
function showMessage(text, name){
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage, 500, text, name);//рекурсия
}
setTimeout(showMessage, 500, 'Hello', 'World');

//интервал с рекурсией и последовательность чисел
function showNumer(num){
    console.log(num);
    if(num<5){
    setTimeout(showNumer, 1000, ++num);
    }
}
setTimeout(showNumer, 1000, 1);

function showNumer(num){
    console.log(num);
    let timeId = setTimeout(showNumer,1000, ++num);
    if(num === 6){
        clearTimeout(timeId);
    }
}
setTimeout(showNumer, 1000, 1);
*/
let result = 0;
function showNumer (num){
    result += num;
    console.log(result);
    if(result === 5){
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumer, 500, 1);