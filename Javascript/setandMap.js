let emptySet = new Set()

console.log(emptySet.size);

let myArr = [1,2,3,4]
let newSet = new Set(myArr)
console.log(newSet.has(10));
console.log(newSet)

newSet.add(10)
// newSet.clear()
console.log(newSet)

//Set Difference

function setDifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)));
}

//Map

let map = new Map()
console.log(map.size)

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"]
];

arr.map((arrayItem)=> map.set(arrayItem[0],arrayItem[1]));
console.log(map);
