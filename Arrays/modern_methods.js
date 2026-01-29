let spieces = ["Bacteria", "plants", "Insects"]
let species2 = ["animals", "birds", "humans"]

//concat => add two arrays into one
console.log(spieces.concat(species2));

//join() => to add  something in each array
// //Join  👉 Converts an array into a string, with a separator. ✅ Returns string ❌ Original array unchanged

console.log(species2.join(" $")); //output : animals $birds $humans
console.log(species2.join("$")); //output : animals$birds$humans
console.log(species2.join("$ ")); // output: animals$ birds$ humans
console.log(species2.join("")); //output : animalsbirdshumans

//flat()=> remove nesting array and convert into single array
//flat() does NOT modify the original array. It creates a new flattened array

let stranger_things = ["newyork", "hawkings", ["upsidedown", "dimensinX", ["mindflayer", "vecna", ["eleven", "one"]]]]
console.log(stranger_things);
let flat = stranger_things.flat(Infinity); // infinity means complete remove nested array
console.log(flat);

//spread operator is used to copy an array/object
//Advantage is if you want to change the elemetn in user2 it will not change the element in user1.only change in user2.
let user1 = ["gowshik", "MSC", 23]
const user2 = [...user1] //These three dot(...) is a spread operator

let a = [1, 2, 3]
let b = [4, 5, 6]
let c = ["hello", "world"]
let d = [...a, ...b, ...c]
console.log(d) //output: [ 1, 2, 3, 4, 5, 6, 'hello', 'world' ]
console.log([...a, ...b]) //output: [ 1, 2, 3, 4, 5, 6 ]

