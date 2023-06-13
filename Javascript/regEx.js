let pattern = "pw";

let regExOne = new RegExp(pattern);

let flag = "gi";
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi;

const strToCheck = "PW is an Indian educational technology company headquartered in UP. pwskills is a platform for student";

const result = regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree,'p-w');
console.log(oneMoreResult);

const webURL = "https://pwskills.com/hitesh%600choudhary";
const useableURL = webURL.replace(/%\d\d0/,"-");
console.log(useableURL);