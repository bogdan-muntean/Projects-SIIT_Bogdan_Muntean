var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1]

// 1. display in the console the numbers from 1 to 20

// for(var i = 0; i < array.length; i++){
//     if(array[i] >= 1 && array[i] <= 20){
//         console.log(array[i]);
//     }
// }

// 2. display in the console the odd numbers from 1 to 20

// for(var i = 0; i < array.length; i++){
//     if((array[i] % 2) != 0){
//         console.log(array[i]);
//     }
// }

// 3. compute the sum of the elements of an array and display it in the console

// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
// }
// console.log(sum);

// 4. compute the maximum of the elements of an array and display it in the console

// var maxim = 0;
// for(var i = 0; i < array.length; i++){
//     if(array[i] > maxim){
//         maxim = array[i];
//     }
// }
// console.log(maxim);

// 5. compute how many times a certain element appears in an array - tips: use object, var element = 2

// var element = {};
// for(var i = 0; i < array.length; i++){
//     if(element[array[i]]){
//         element[array[i]]++;
//     } else {
//         element[array[i]] = 1;
//     }
// }
// console.log(element);

// 6. Using nested control structures (doua for + if) for generate the following pattern
//   0 1 0 1
//   1 0 1 0
//   0 1 0 1
//   1 0 1 0

for(var i = 0; i < 4; i++){
    let array =[];
    for(var j = 0; j < 4; j++){
        if( (i + j) % 2 === 0)        // Ori  i === j || i === (j-2) || j === (i-2)
            array += "0 ";
        else
            array += "1 ";
    }
    console.log(array)
}
