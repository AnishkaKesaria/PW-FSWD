let arr = [2,3,4];

//FOREACH

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr)=>{
    console.log('arrow: ',index,element,arr);
})

const heros = ["Raj","Humpty","Pandeyji","Krish"];
heros.forEach((element)=>{
    console.log(element.toUpperCase());
})

//MAP

arr.map(function(element,index,arr){
    console.log(index, element, arr);
})

heros.map((element)=>{
    console.log(element.toLowerCase());
})

//FILTER

console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('Raj');
})

console.log(herosWithRaj);

const cartBill = [20,30,50]
const sumOfCartBill = cartBill.reduce((prev,curr)=>prev+curr, 0);
console.log(sumOfCartBill);

const gameScore = [200, 310, 300, 250, 150];
//Check is all values are numbers

const gameScoreCheck = gameScore.every((value)=>typeof value === "number");
console.log("check: ", gameScoreCheck);


//find score abv 200

const above200 = gameScore.find((score)=> score>200);
console.log(above200);

//Homework
//findIndex
//sort
//some