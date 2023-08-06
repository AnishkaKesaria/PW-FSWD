//h - hof
//fn - callback

function h(x,fn){
    console.log(x*x);
    fn();
}

h(10, function(){
    console.log("Done with callback");
})

//Asyncronous
console.log("start");
setTimeout(function f(){
    console.log("Timer done 1");
},100)
setTimeout(function f(){
    console.log("Timer done 2");
},0)
console.log("end");

for(let i=0; i<100000000; i++){}