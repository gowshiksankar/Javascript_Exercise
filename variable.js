//global scope=>var,let,const
const/let/var name="stranger Things"; //if you put var/let/const all are working
function call(){
  console.log(name);
}
call()
console.log(name)

//functional scope =>var,let,const => It means funcion ku ulla mattume antha valuea access panna mudiyum
function print()
{
  var/let/const ott="Netflix" //if put var/let/const all are not working
  console.log(ott)
}
print()
console.log(ott) //it will not work bcz of functional scope

//block scope=>let/const
if(true){
  const series="From"//if put let/const it will  not work but var keyword will work
}
console.log(series)  

//example :2

let x = 10; // global Scope
function demo() {
  console.log(x); // can access
}

demo();
console.log(x); // can access here also

//Block Scope  It include if,for,while,switch,{}
{
  let a = 20; //  If you change 'let' into 'var' it will work
  console.log(a); // works
}

console.log(a); // ❌ Error: a is not defined

//Functional Scope
function test() {
  let c = 40;
  console.log(c); // works
}

test();
console.log(c); // ❌ Error: c is not defined



const couples="joyse hopper"  //global scope
function strangerthings(){
    let characters="dustin steve";  // functional scope
    console.log(characters)
    console.log(couples);
    if(true){
        const henry="mind flayer";// block scope
        console.log(henry)
    }
    console.log(henry) // ❌ Not working because of block scope 
}
console.log(couples);
console.log(characters); // ❌ it will not work even var keyword also
strangerthings()
   

//   var,let,const are global scope
//   var,let,const are functional scope
//   let,const are only Block scope


var gowshik="name";
let gowshik="Amazon" // ❌ not able to assign
console.log(gowshik);   //It shown error because once you decalared a variable name to a keyword 'var' the same variable you wont be able to assign with the 'let' keyword

//Hoisting

function hoisting()
{
  a=20;
  let b=30;
}
console.log(a); //It will work because javascript consider as var a=20; this is called Hoisting.  
console.log(b); //It will not work b is not defined
  
