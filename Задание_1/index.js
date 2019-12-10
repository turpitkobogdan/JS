let money, time;

function start () {
money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || null) {// проверка на нажатие отмены, или пустое значение
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    moneyPerDay: 0,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true
};


function chooseExpenses(){

    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется', '');

        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
                console.log('done');
                appData.expenses[a] = b;
        } else {
            i=i-1;
        }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.budget / 30);
        console.log('ежедневный бюджет' +appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if( appData.moneyPerDay < 100) {
        console.log("минимальныйуровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Высокий уровень достатка");
    } else {
        alert ('хуйня давай сначала');
    }
}
detectLevel();



function checkSavigs () {
    if (appData.savings == true) {
        let save = +prompt ('какова сума накоплений?'),
            percent = +prompt('Какой процент');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита' + appData.monthIncome);
    }
}
checkSavigs();


function chooseOptExpenses() {
    for (i = 0; i < 4; i++){
        let a = prompt('Статья необязательных расходов?');
        let b = prompt('Введите сумму необязательных расходов');
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50){
                appData.optionalExpenses[a] = b;
                console.log('Выполнено');
            } else { 
                i= i-1;
            }
    }
}
chooseOptExpenses();
// Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// Записать ответы в объект optionalExpenses в формате Номер - Ответ.
// optionalExpenses: {
// 1 : “ответ на вопрос”
// }
// Вызывать функции не обязательно.













// new function open () {
// let o = 1;
// while (o <= 2) {
//     let a = prompt('сколько вы зарабатываете?', ''),
//         b = prompt('Во сколько обойдется?', '');

//         if (typeof(a) === 'string' && typeof(a) != null && b !='' && a != '' && b !='' && a.length < 50)
//         console.log('fukk');
//         appData.expenses[a] = b;
//         o++;
// } else {
//     function arr()
// }
// }
// open ();