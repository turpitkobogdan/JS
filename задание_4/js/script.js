let menuLi = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    menuItem = document.createElement('li'),           // создаем дом-узел    (создаем тег ли)
    prompts = document.getElementById('prompt'),
    bodys = document.getElementsByTagName('body');


menu.insertBefore(menuLi[2], menuLi[1]);  // меняем элементы 2 и 3 местами


console.log(menuLi);
console.log(adv);




menuItem.classList.add('menu-item'); // указиваем класс созданому ли
menuItem.textContent = ('Пятый элемент');// присвоим значение
menu.appendChild(menuItem); //  указиваем куда нужно вставить



document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // меняем картинку css

title.textContent = ('Мы продаем только подлиную технику Apple');  // присвоили текст по ID


adv.remove();    // удалить класс


let answer = prompt('Отношение к технике Apple?', '');
prompts.textContent = answer;








