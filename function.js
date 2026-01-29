// let name=function(a,b){
//     console.log(a+b);
// }
// name("harry","potter");

// let st=(character)=> {return character}
// console.log(st("dustin"));

//  callback function


// function first(){
//     console.log("This is First");
// }
// first()

// setTimeout(()=>{ console.log("This is Second"); },3000)
 
// function movie(name,callback)
// {
//     console.log(name);
//     callback(startin,endin)
// }
// function year(startin,endin)
// {
//     console.log(startin,endin);
    
// }
// movie("Harry Potter","2002","2012");



function operation(op){
    return op(5,9)
}

let add=(a,b)=>{ return a+b}
let sub=(a,b)=>{ return a-b}

console.log(operation(add));
