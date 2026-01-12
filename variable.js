let x = 10; // global Scope
function demo() {
  console.log(x); // can access
}

demo();
console.log(x); // can access here also

//Block Scope
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
    console.log(henry) //Not working because of block scope 
}
console.log(couples);
console.log(characters); //it will not work even var keyword also
strangerthings()
   

//   var,let,const are global scope
//   var,let,const are functional scope
//   let,const are only Block scope


var gowshik="name";
let gowshik="Amazon"
console.log(gowshik);   //It shown error because once you decalared a variable name to a keyword 'var' the same variable you wont be able to assign with the 'let' keyword

//Hoisting

function hoisting()
{
  a=20;
  let b=30;
}
console.log(a); //It will work because javascript consider as var a=20; this is called Hoisting.  
console.log(b); //It will not work b is not defined
  
