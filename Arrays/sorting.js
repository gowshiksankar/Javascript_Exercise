/*sort arrange an element in an order
it affect/change/mutate original array only
It need a compare function for members
*/

//let see with strings
let series=["stranger things","from","dark","cobra kai"]
series.sort()  //It arrange the element in starting letter alphabetical order
console.log(series); //output: [ 'cobra kai', 'dark', 'from', 'stranger things' ]

// ☑sort()=>numbers .1st,capital letter word: 2nd,small letter word:3rd

//Eg:2
let name=["zebra","lucky baskar","1899","F","sirai","W"]
console.log(name.sort()) //output : [ '1899', 'F', 'W', 'lucky baskar', 'sirai', 'zebra' ] 

//let see with numbers

/*Rules
a-b => +ve => b first a second  (ba)
a-b => -ve => a first b second  (ab)
a-b => zero => a first b second (ab)
*/

let numbers=[1,10,2,3,5,7]
numbers.sort((a,b)=>a-b) //output : [ 1, 2, 3, 5, 7, 10 ] Ascending order
numbers.sort((a,b)=>b-a) //output : [ 10, 7, 5, 3, 2, 1 ] Descending order
console.log(numbers);
