//searching Methods in array

let spiderman=["tobey","andrew","tom","Gwen","peter","harry"];
console.log(spiderman.indexOf('tom')); //indexOf
console.log(spiderman.lastIndexOf("tobey")) //lastindexof()  👉 Same as indexOf(), but searches from the end.

//include => element exist or not  :return true or false
console.log(spiderman.includes("ironman"))
let numbers=[2,3,7,9,11,1]
console.log(numbers.includes(1))
 
//find
let result=numbers.find((num)=>num>2)
console.log(result)  //output: 3 It will give only first result value element

let result2=numbers.findIndex((num)=>num>7) //findIndex
console.log(result2);
let result3=numbers.findLastIndex((num)=>num>9)
console.log(result3);

let result4=numbers.findLast((num)=>num>9) //It search right to left and it return the element not index
console.log(result4);



