var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');




let appData = {
    budget: money,
    timeData: time,
    
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};


    

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется', '');

//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//      && a != '' && b != '' && a.length < 50){
//          console.log('done');
//          appData.expenses[a] = b;
//     }  else 
// }


alert(appData.budget / 30);
console.log(appData.budget);







for (let i =0; i < 2; i++) {
    let a = prompt('сколько вы зарабатываете?', ''),
        b = prompt('Во сколько обойдется?', '');

        if (typeof(a)=== 'string' && typeof(a) != null && typeof(a) != '' && typeof(b) != null && typeof(b) != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        }
}