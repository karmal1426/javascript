// conditionals 

/*if(condtion){
    action to be carried out
}*/

let friend = 'Jenifer';

//simple if statement

// if (friend === 'Jenifer') {
//     alert(friend)
// }

let occupation = 'software developer'

if (occupation === 'software developer'){
    alert(occupation)
}else{
    alert("You're not a software developer")
}



// if else if statement multiple condition and accounts 

if (occupation === 'software developer'){
    alert(occupation)
}
else if (occupation === 'teacher'){
    alert(occupation)
}
else{
    alert('tell me your occupation')
}


// let accBalance;

// if(accBalance <=10){
//     alert('You\'re starving')
// }
// else if(accBalance > 10 && accBalance <=50)




let price;

if (price <= 50){
    alert(price * 0.5)
}
else if (price < 50 && price >= 150){
    alert(price * 0.2)
}
else if (price < 150){
    alert(price * 0.1)
}
else{
    alert('no value here')
}


function numberCount(numb1, numb2, numb3) {
    let averageNumber;
    averageNumber = numb1 + numb2 + numb3 /3;
    return averageNumber;
}
console.log(numberCount(45,23,53))

