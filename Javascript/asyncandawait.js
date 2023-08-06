function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("Timer done");
            resolve(10);
        }, 3000);
    });
}

async function consume(){
    console.log("inside function");
    const response = await createPromise();
    console.log("Response is", response);
}

console.log("start");
consume();
console.log("end");

