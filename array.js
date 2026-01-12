// let ott=["Netflix","Prime","Hotstar","zee5","aha"];
// console.log(ott);  //whole array print
// console.log(ott[0]); //array call using postion(starting position is o)
// console.log(ott.length); // is used to tell the length of an array

// //using for loop
// for(let i=0;i<ott.length;i++){
//     console.log(ott[i]);    
// }

// //using while loop
// let i=0;
// while(i<ott.length){
//     console.log(ott[i]);
//     i++
// }
// //using Do while loop
// let x=0;
// do{
//     console.log(ott[x]);
//     x++
// }
// while(x<ott.length)

// //for of  it is used for iterate an array element
// let fruits=["apple","mango","banana","134"]
// fruits.reverse();
// for(let fruit of fruits){
//     console.log(fruit);
// }

// //for in it is used for iteran an index value only
// for(let fru in fruits[2]){
//     console.log(fru);
// }

//for each
let sk=["amaran","remo","maveeran","vvs"]
sk.forEach(display);
sk.forEach((movies)=>console.log(movies))
        //or
function display(number){
    console.log(number);
    
}