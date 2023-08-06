let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flush", "superman"]

let heropower = {
    thor: "hammer",
    spiderman : "sling",

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anishka = function(){
    console.log(`Anishka is present in all objects`);
}

console.log(myHeros.anishka());
console.log(heropower.anishka());

Array.prototype.heyAnishka = function(){
    console.log(`Anishka says Hi!`);
}

console.log(myHeros.heyAnishka());
// console.log(heropower.heyAnishka());


//Inheritence

const User = {
    name : "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAAssistant = {
    makeAssignment : "JS Assignment",
    fulltime : true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TAAssistant.isAvailable);

String.prototype.truelength = function (){
    console.log(`True length is ${this.trim().length}`);
}

"anishka           ".truelength()
"kesaria           ".truelength()