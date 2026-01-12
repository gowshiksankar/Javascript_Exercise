//Eg:1
function welcome(name, callback) {
    console.log("My name:" + " " + name);

    setTimeout(() => {callback(name)}, 3000);
}
function goodbye(tu) {
    console.log("goodbye" + " " + tu)
}
welcome("gowshik", goodbye)

//Eg:3
function calculate(x,y,add)
{
    console.log(add(x,y))
}
function add(x,y)
{

   return x+y;
}




//Eg:4

function hawkins(Eleven,callback,vecna){
    console.log("Its good")
    callback(Eleven)
    vecna();
}

function upsidedown(demogargan){
    console.log("it is bridge")
}
function dimensionx(){
    console.log("The Mind flayer")
}
hawkins("jane",upsidedown,dimensionx);        //upsidedown=callback=>upsidedown(demogargan)=callback(Eleven)

//Eg:5

function heroine(name,callback1,callback2){
    console.log("heroine name:"+" "+name);
    setTimeout(() => { callback1()}, 3000);
    setTimeout(() => {
        callback2()
    },4000);
}
function doctor(){
    console.log("Hi Trisha I'am the doctor, how can i help you ?");    
}
function nurse(){
    console.log("you will be alright! Take these medicine. Take care");
}
heroine("Trisha",doctor,nurse)
