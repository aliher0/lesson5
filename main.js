// ЦИКЛ for..of 
// var arr = [1, 2, 3, 4, 5, 6]
//Индексы- 0 1 2 3 4 5 
// var fruits = [ 'яблоко', 'груша', 'арбуз', 'мандарин', 'апельсин',
// 'банан']


// for (var fruits of fruits) {
//     console.log('fruit:' + fruit + ' ' + fruit.length)
// }
// цикл для фильтрация
// continue - если true то пропускает одну интегpацию
// for (var fruit of fruits ) {
//     var fruitFirstChar = fruit[0];
//     if (fruitFirstChar === 'я' || fruitFirstChar === 'б')
//     {
//         continue;
//     }
    
//         console.log('fruit:  '  + fruit + ' ' + fruit.length)
    
// }



// Цикл для поиска 
// var selectFruit = prompt( 'Найди фрукт')
// for ( var fruit of fruits){
//   if (fruit === selectFruit){
//      console.log('Bingo Bingo Bingo Ты нашел свой фрукт');
//      break;
//   }
//    console.log('Ищи дальше')
//}










//Цикл внутри цикла
// var result = '# # # # #';
// for ( var i =0; i < 8; i++){
//   for (var j = 8; j < 8; j++)
//     for ( var j = 0; j < 10; j++){
//       if (i % 2 !== 0){
//         result += j % 2 === 0 ? ' ' : '#'
//     }else {
//         result += j % 2 === 0 ? '#' : ' '
//     }
//     }
//     result += '/n'
// }








// Цикл - while - используется редко - коп колдонулбайт

// var count = 0;
// while (count < fruits.length || selectFruit === fruits[count]){
//     var selectFruit = prompt( 'Найди фрукт')
//     console.log('test')
//     count++;
    
//}


// do while  - коп колдонулбайт
// var count = 1;
// do {
//     console.log('test')
// } while (count <= 5)

// цикл - for in - используется для объктов


var obj = {
    name: 'aliher',
    surname:'tolgoev',
    age:13,
    pol:1,
    judging:null,
    dopInfo:undefined,
    card: {
        type:  Visa,
        num: 13354747487,
        balance: 50000,
        valuta:'KGS'
    }


// }


// for (key in user ){
//     console.log(key + ' : ' + 
//     typeof(user[key] === 'object'
//     ? JSON.stringify(user[ke])))
// }
