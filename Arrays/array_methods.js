//push,pop,shift,unshift
//slice,splice
//forEach,for of, for in,map,filter,reduce
//sort,reverse,
//indexof,concat,tostring 

let ott = ["Netflix", "prime", "sony", "hotstar", 14122202,]
ott.push("zee5", "aha", "jio");  // add elements at the end
console.log(ott);
ott.pop("aha") //it doesnot remove "aha" remove "jio" because pop only remove last element only
console.log(ott);


let numbers = [10, 20]
let add = numbers.push(500); //output:3 (3rd element)
let add2 = numbers.push(900); //output:4 (4th element)
console.log(add);
console.log(add2);
let a = [1, 2];
a.push();         //array remains unchanged
console.log(a);

a.shift() //Remove first element
console.log(a);  //output:[2]
a.unshift("gowshik") //Add first element
console.log(a); //output:["gowshik",2]

let value = ["animal", 14, "birds", 12, "Movies", 2002, true, 1]
let pri = value.slice(1, 2) //This is called shallow copy
console.log(pri);  //output:[14]  return new array
console.log(value);

// splice():
value.splice(1, 7, "flowers", "plants", "planets")
console.log(value)  //output:["animal","flowers","plants","planets"]

// Update:
spliceUpdate = () => {
    let fruits = ["Apple", "Banana", "Orange"];
    let val = fruits.splice(1, 1, "Grapes", "Kiwi");

    //Syntax: array.splice(index, count, item1, ....., itemX)

    console.log(fruits); // Output: ['Apple', 'Grapes', 'Kiwi', 'Orange']
    console.log(val); // Output: ['Banana']
}
// spliceUpdate();

// Remove:
spliceRemove = () => {
    let fruits = ["Apple", "Banana", "Orange", "Grapes"];
    fruits.splice(1, 2);
    console.log(fruits); // Output: ['Apple', 'Grapes']
}
// spliceRemove();

// Add 
spliceAdd = () => {
    let fruits = ["Apple", "Banana", "Orange"];
    let val = fruits.splice(1, 0, "Grapes");

    console.log(fruits); // Output: ['Apple', 'Grapes', 'Banana', 'Orange']
    console.log(val); // Output: []
}
// spliceAdd();

// Reassign Common Variable
// fruits = ["Apple", "Banana", "Orange"];


let numberss = [1, 11, 2, 8, 13, 7]

// find()=>only give first result only
let finder = numberss.find((num) => { return num < 7 })
console.log(finder)  //output:1 

//filter run based on condition and gives news new array.it doesnt alter the original array.
let filtered = numberss.filter((num) => { return num > 1 })
console.log(filtered) //output:[11,2,8,13,7]

//map 

let map1 = numberss.map((num) => { return num > 1 })
console.log(map1) //output:[ false, true, true, true, true, true ]

// reduce((accumulator,currentvalue)=>acc+currentvalue),initial value
let prices=[1,2,4,8,11,15,16,23,42]
let totalprices=prices.reduce((total,currentprice)=>{
  return total+currentprice
},78)
console.log(totalprices)

//some() =>👉 At least ONE element satisfies the condition.One is enugh
const nums = [1, 3, 5, 8];
nums.some((n) => n % 2 == 0);// true (8 is even)

//every() =>👉 ALL elements must satisfy the condition. No Exception allowed
const nums2 = [2, 4, 6, 8];
nums.every((n) => n % 2 === 0); // true If one failure immediately totally false
