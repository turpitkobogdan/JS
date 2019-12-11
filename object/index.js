// let odj = new Object()


// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     bg: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('свойства  ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);          //количество свойств у объекта


// let arr = [1,2,3,4,5];

// // arr.pop(); //удалить последний элемент масива
// // arr.push('5'); //Добавить в конец элемент
// // arr.shift();//удаляет первый елемент масива
// // arr.unshift('1');// добавляет в начало лемент


// for (let i =0; i<arr.length; i++) {        // перебрать все значения масива
//     console.log(arr[i]);
// }



// arr.forEach(function(item, i, mass){                                 // выводит каждый элемент(значение/ номер элемента/)
//     console.log(i + ': ' + item + ' (массив: ' + mass + ' ) ' );
// });

// console.log(arr);

// let mass = [1,3,4,5,6,7];

// for (let key in mass) {         //in выдает номер элемнта
//     console.log(key);
// }

// for (let key of mass)           //of выдает значения элемнта
//     console.log(key);
// }





// let ans = prompt('', ''),
//     arr = [];

// arr= ans.split(',');            //через кому записует новые значения массива
// console.log(arr);


// let arr =['fcf', 'gjv', '1111111', '555'],
//     i = arr.join(', ');
//     console.log(arr);


// let arr =['jjj','gggg','uuu'],
//     i=arr.sort();              //сортирует строки по алфавиту
//     console.log(arr);


let arr = [1,20,3],
    i = arr.sort(compareNum);      //сортирует числа
function compareNum(a, b) {
    return a-b;
}
console.log(arr);




let solder ={  //унаследование
    armo: 500,
    health: 200
};

let Surm ={
    health: 100
};
Surm.__proto__ = solder;
console.log(Surm);
console.log(Surm.armo);