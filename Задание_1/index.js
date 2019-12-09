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
detectDayBudget();




function checkSavigs () {
    if (appData.savings == true) {
        let save = +prompt ('какова сума накоплений?'),
            percent = +prompt('Какой процент');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита' + appData.monthIncome);
    }
}
checkSavigs();

//Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)













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