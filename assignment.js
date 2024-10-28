//John BMI calc
let jMass = 85 
let jHeight = 1.76 
let jBMI = jMass / jHeight**2;

console.log(jBMI + ' kgm')

//Mark BMI calc
let mMass = 95
let mHeight = 1.88 

let mBMI = jMass / jHeight**2;

console.log(mBMI + ' kgm')

if (mBMI > jBMI){
    console.log('Mark bmi is higher')
}else if (mBMI === jBMI){
    console.log('both have the same bmi')
}else{
    console.log('john bmi is higher')
}

let dolphins;
let koalas;
dFirstScore = 97;
dSecondScore = 112;
dThirdScore = 101;

kFirstScore = 109;
kSecondScore = 95;
kThirdScore = 123;

dolphinsAverage = (dFirstScore + dSecondScore + dThirdScore)/3;
koalasAverage = (kFirstScore + kSecondScore + kThirdScore)/3;

if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage){
    console.log('Dolphin wins the competition');
}else if (dolphinsAverage >= 100 && dolphinsAverage < koalasAverage){
    console.log('Koalas wins the competition');
}else if (dolphinsAverage >= 100 && dolphinsAverage === koalasAverage){
    console.log('this competition is a draw');
}else if (dolphinsAverage < 100 && koalasAverage > 100){
    console.log('Koalas win with clear margin');
}else if (dolphinsAverage > 100 && koalasAverage < 100){
    console.log('Dolphins win with clear margin');
}else{
    console.log('Both of them lost the game');
}

bill = 40

let tip1 = 3/20;

let tip2 = 1/5;

bill<= 300;
bill > 300;

firstBill = bill * tip1 
secondBill = bill * tip2




if (bill > 50 && bill <= 300){
    console.log(Bill + firstBill)
}else if (bill > 300){
    console.log(bill + secondBill)
}else{
    console.log('Not eligible')
    
}
