function first() {
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}
first();
second();

function learn(lang, callback){
    console.log('я учу' + lang);
    callback();
}

learn('JavaScript', function(){
    console.log('я прошел 3-й урок!')
    let a = prompt('vfvsdfvc', '');
    if (typeof(a) === 'string' && (typeof(a) != null) && (typeof(a) != '') ){
        
    }
})