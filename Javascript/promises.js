function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("time done");
            reject("done");
        }, 3000);
    });
}

console.log("start")
let x = createPromise();
console.log("got a new promise");

x.then(function f(){
    console.log("Promise done");
}).catch(function g(){
    console.log("Handled");
});

console.log("end");

for(let i=0; i<10000000; i++)
{ if(i== 10000000-1){console.log("looping");}}