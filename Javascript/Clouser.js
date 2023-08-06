let score = 4

function one(){
    let score = 0
    console.log(score);
}

function two(){
    let score = 3
    console.log(score);
}

function three(){
    console.log(score);
}

one()
two()
three()
console.log(score);

function outerfunc(){
    let outerVar = 'I am'
}

//Closure

function superFun(){
    let outerva = "I'm outer"
    function minorFun(){
        console.log(outerva);
    }
    minorFun()
}

superFun()

const errorMsg = "File not found!"

setTimeout(function callback(){
    console.log(errorMsg);
}, 1000)


let pageCount = 0

const items = [2, 4, 5, 7, 8]

items.forEach(function iterator(num)
{
    pageCount++;
    console.log(num);
})

console.log("Page COunt", pageCount);