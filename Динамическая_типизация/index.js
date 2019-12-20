

                // Перевести в строку

// 1.

String(null);
console.log(typeof(String(null)));


//2. Конкатинация

console.log('www' + 5);
console.log(typeof('www' + 5 + false)); // string
console.log('http://vk.com/catalog/' + 5);



                // В числа

// 1.

console.log(typeof(Number('5')));

// 2. Унарный +

console.log(typeof(5 + + '5'));

// 3.

console.log(typeof(parseInt('15px', 10)));


let ans = +prompt('hello ', '');         // Числа


            //Перевести в boolean


0, '',null, undefined, NaN        //ничего/false

let switcher = null;

if (switcher) {
    console.log('working..');    // не будет выполнено, так как switcherswitcher = null(false)
}

switcher = 1;

if (switcher) {               //будет выполнено, так как switcher = 1(true)
    console.log('working..');
}

// 2
console.log(typeof(Boolean('5')));

// 3
console.log(typeof(!! '5'));





console.log( null || 2 && 3 || 4 );


if ("ажик" > "Аблоко") {
    console.log('da');
} else {
    console.log('net');
}
