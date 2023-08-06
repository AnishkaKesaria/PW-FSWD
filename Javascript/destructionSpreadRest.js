const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)

// const threeArray = [oneArray, twoArray]


// ... - rest & spread both
const threeArray = [...oneArray, ...twoArray] //spread here
console.log(threeArray);

function manyArguments(){
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)

//rest

function manyArguments2(...args)
{
    console.log(typeof args);
    let finalArr = args.map(e=>e)
    console.log(finalArr);
}

manyArguments2(1,2,3)
manyArguments2(1,2,3,4,5,6,7)


