let btn = document.querySelectorAll('button'),
    wrap = document.getElementsByClassName('wrapper')[0],
    link = document.querySelector('a');



// btn[0].onclick = function () {           // При нажатии(onclick) на кнопку btn[0]    не правильно
//     alert('Вы нажали первую кнопку');
// };


// btn[0].addEventListener('click', function(event) {           // При нажатии(click) на кнопку btn[0] выводит... Используется колбэк функция
//     //console.log(event);
//     //let target = event.target;    //присвоить target значения объекта HTML 
//     //target.style.display = 'none';    // скрыть кнопку после нажатия

//     console.log('произошло событие ' + event.type + ' на элементе ' + event.target);  // произошло событие click на элементе [object HTMLButtonElement]
//     // alert('Вы нажали первую кнопку');
// });

// btn[0].addEventListener('click', function() {           // Вторая команда не перезаписует старую
//     alert('Вы fvfbvxfgb нажали первую кнопку');
// });

// btn[0].addEventListener('mouseenter', function() {         // При наведении (mouseenter) на кнопку btn[0] выводит
//     alert('вы навели на кнопку');
// });


// wrap.addEventListener('click', function(){ // Всплытие элемента поверх материнского
//     console.log('произошло событие ' + event.type + ' на элементе ' + event.target);  // произошло событие click на элементе [object HTMLButtonElement]
// });

link.addEventListener('click', function(event){
    event.preventDefault();                        // Блокирует переход по ссылке 
    console.log('произошло событие ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item){                         // цикл, что бы функция распостранилась на все btn
    item.addEventListener('mouseleave', function(){   //вывести курсор за пределы элемента (mouseleave) 
        console.log('Вышли!');
    });
});


