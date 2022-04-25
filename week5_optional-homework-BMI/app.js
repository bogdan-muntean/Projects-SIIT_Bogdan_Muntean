// const users = {
//      john : 24 , 
//      johnBmi : " " , 
//      mary : 30 , 
//      maryBmi : " "
// }

let john = 24;
let johnBmi;

let mary = 30;
let maryBmi;

function checkBmi(bmiValue){
    console.log("in function")

    if(bmiValue < 18.5){
        return 'Underweight';
    } 
    else if(bmiValue < 25){
        return 'Normal';
    }
    else if(bmiValue < 30){
        return 'Overweight';
    }    
    else {
        return 'Obese';
    }
}
johnBmi = checkBmi(john);
maryBmi = checkBmi(mary);

console.log(`John is ${johnBmi}`);
console.log(`Mary is ${maryBmi}`);


//ES6
const createDiv = document.createElement('div')
createDiv.innerText = `
BMI optional homework. 
John Doe | M | BMI: 24 | Normal Weight
Mary Anne | F | BMI: 30 | Obese

John Doe is ${johnBmi}
Mary Anne is ${maryBmi}`;
document.body.appendChild(createDiv)

//De ce nu functioneaza functia de mai jos?
// function checkBmi(bmiValue){
//     console.log("in function")

//     if(bmiValue < 18.5){
//         conclusion = 'Underweight';
//         console.log('underweight');
//     } 
//     else if(bmiValue < 25){
//         conclusion = 'Normal';
//         console.log('normal');
//     }
//     else if(bmiValue < 30){
//         conclusion = 'Overweight';
//         console.log('overweight');
//     }    
//     else {
//         conclusion = 'Obese';
//         console.log('obese');
//     }
// }
