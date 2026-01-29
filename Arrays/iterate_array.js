// let ott = ["Netflix", "Prime", "Hotstar", "zee5", "aha"];
// // console.log(ott);  //whole array print
// // console.log(ott[0]); //array call using postion(starting position is o)
// // console.log(ott.length); // is used to tell the length of an array  //Output: 5

// // //loops to iterate an element
// // //using for loop
// // for(let i=0;i<ott.length;i++){
// //     console.log(ott[i]);    
// // }

// // //using while loop
// // let i=0;
// // while(i<ott.length){
// //     console.log(ott[i]);
// //     i++
// // }
// // //using Do while loop
// // let x=0;
// // do{
// //     console.log(ott[x]);
// //     x++
// // }
// // while(x<ott.length)

// // //for of  it is used for iterate an array element

// // let fruits=["apple","mango","banana","134"]
// // fruits.reverse();
// // for(let fruit of fruits){
// //     console.log(fruit);
// // }

// // //for in it is used for iterate an index value only

// // for(let fru in fruits[2]){
// //     console.log(fru);
// // }

// // //for each

// // let sk=["amaran","remo","maveeran","vvs"]
// // function display(number){
// //     console.log(number);

// // }
// // sk.forEach(display); //callback used
// //               //or
// // sk.forEach((movies)=>console.log(movies))

// //entries()  => it return  keys and values
// let entries = [...ott.entries()]
// console.log(entries);

// let values = [...ott.values()]// it only return values 
// console.log(values);

// let keys = [...ott.keys()]// it only return keys(index position)
// console.log(keys);

// //from() =>it convert from set/literable object into an real array

// Array.from("Mars"); //output: ["M", "a", "r", "s"]

// //of()  => create an array that an argument passes

Array(3);      // [ <3 empty items> ] it means an array created with length 3
console.log(Array.of(3));   // [3] it means array created and element is 3
console.log(Array.of(3,34,"Gowshik","HP")); // output: [ 3, 34, 'Gowshik', 'HP' ]
