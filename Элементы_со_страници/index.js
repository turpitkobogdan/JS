let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'); //первый элемент 
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[2]);
// console.log(oneHeart);


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i =0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';              // присвоить всем элементам стиль
// }    

// heart.forEach(function (item, i, hearts) {                   // присвоить всем элементам стиль
//     item.style.backgroundColor = 'blue';
// });


let div = document.createElement('div'),                //создать тэг div
    text = document.createTextNode('тут был я');

div.classList.add('black');                                    // ПРИСВОИТЬ div класс black

document.body.appendChild(div);            // вставить в родительский класс body в самый конец кода элемент div
//wrapper.apendChild(div);                     //вставить в родительський класс wrapper - div


btn[1].remove();         // удалить 1 элемент с menus

document.body.insertBefore(div, circle[0]);     // в родительськом классе body вставить элемент div перед circle[0]
document.body.removeChild(circle[1]);           //удалить из родительського класса body circle[1]
wrapper.removeChild(heart[1]);                       //удалить из родительського класса wrapper heart[1]


document.body.replaceChild(btn[1], circle[1]);      //в родительском классе body заменить новым элементом btn[1] старый элемент circle[1] 

//div.innerHTML = '<h1>привет мир</h1>';          // присвоить значению элементу div текст <h1>привет мир</h1>
div.textContent = 'привет мир';                 // присвоить значению элементу div текст (безопаснее)




//document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // меняем картинку css


