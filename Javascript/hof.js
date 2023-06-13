const powerTwo = (n) =>{
    return n**2;
}

function powerCube(powerTwo, n){
    return powerTwo(n)*n;
}

//console.log(powerCube(powerTwo,3));

function sayHello(){
    return() => {
        console.log("Hello by Anishka!");
    }
}

let guessValue = sayHello();
console.log(guessValue);

guessValue();

const higherOder = n =>{
    const oneFunc = m =>{
        const twoFun = p =>{
            return m+n+p;
        }
        return twoFun;
    }
    return oneFunc;
}

console.log(higherOder(2)(3)(4));

const myNums = [2,3,4,5]

const sumArray = arr =>{
    let total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

console.log(sumArray(myNums));

function asaysHi(){
    console.log("Hi Anishka");
}

// setInterval(asaysHi, 1000);
setTimeout(asaysHi,5000);