

// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);

// }

// showFirstMessage('pidor&');
// console.log(num);



// let calc = function(a,b) {
//     return (a+b);
// }
let calc = (a,b) => a+b

console.log(calc(3,4));

console.log(calc(8,100));


function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);


let str ='test'; 
console.log(str.length);// выводит количество символов строки

console.log(str.toUpperCase());// переводит в верхний регистр
console.log(str.toLocaleLowerCase());// в нижний


let twelve = '12.2px';
//console.log(Math.round(twelve));// округление до ближайшего целого числа
console.log(parseInt(twelve));//округление 
console.log(parseFloat(twelve));// удаляет буквы
let 