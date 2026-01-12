//push,pop,shift,unshift
//slice,splice
//forEach,for of, for in,map,filter,reduce
//sort,reverse,
//indexof,concat,tostring 

let ott=["Netflix","prime","sony","hotstar",14122202,]
ott.push("zee5","aha","jio");  // add elements at the end
console.log(ott);
ott.pop("aha") //it doesnot remove "aha" remove "jio" because pop only remove last element only
console.log(ott);


let numbers=[10,20]
let add=numbers.push(500); //output:3 (3rd element)
let add2=numbers.push(900); //output:4 (4th element)
console.log(add);
console.log(add2);
let a = [1, 2];    
a.push();         //array remains unchanged
console.log(a);

a.shift() //Remove first element
console.log(a);  //output:[2]
a.unshift("gowshik") //Add first element
console.log(a); //output:["gowshik",2]

let value=["animal",14,"birds",12,"Movies",2002,true,1]
let pri=value.slice(1,2) 
console.log(pri);  //output:[14]  return new array
console.log(value);
value.splice(1,7,"flowers","plants","planets")
console.log(value)  //output:["animal","flowers","plants","planets"]


let numbers=[1,11,2,8,13,7]

// find()=>only give first result only
let finder=numbers.find((num)=>{return num<11})
console.log(finder)  //output:1 

//filter run based on condition and gives news new array.it doesnt alter the original array.
let filtered=numbers.filter((num)=>{return num>1})
console.log(filtered) //output:[11,2,8,13,7]

//map
let map1=numbers.map((num)=>{return num>1})
console.log(map1) //output:[ false, true, true, true, true, true ]

// let reduced=numbers.reduce((num)=>{return num>1})
// console.log(reduced)
