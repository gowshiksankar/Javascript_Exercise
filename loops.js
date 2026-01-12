//using for loop with if else if else statement
var series="stranger Things"
function netflix()
{
    for(let i=0;i<=5;i++)
    {
    var love=prompt("which one you love:");
    if(love=="jonathan")
    {
        let couples1="Nancy jonathan";
        console.log(couples1)
    }
    else if(love=="steve")
    {
        let couples2="steve nancy";
        console.log(couples2)
    }
    else
    {
        let friends="dustin steve"
        console.log(friends)
    }
    }
    console.log("The end");
}
netflix()
 //nested for loop using matrix
let matrix=[
      [1,2,3],
      [4,5,6],
      [6,7,8]
    ]
    console.log(matrix)
    
   // using for loop
for(let i=0;i<matrix.length;i++)
{ 
    for(let j=0;j<matrix[i].length;j++)
    {
      console.log(matrix[i][j])
    }
}
    

// //do while

// let season=1
// do{
//     console.log("Season:"+ season);
//     season++
//     if(season>5)
//     {
//         console.log("Chapter one is end")
//     }

// }
// while(season<=5)


function series(name) {
    const myname = name.toUpperCase();
    console.log("Series is" + " " + myname);
    let last = () => { console.log("At last time" + " " + myname) };
    setTimeout(last, 3000)
}
series("Stranger Things")



function welcome(name, callback) {
    console.log("name is" + " " + name)
    callback(name)
}
function goodbye(name) {
    console.log("goodbye" + " " + name);
}
welcome("Gowshik", goodbye)