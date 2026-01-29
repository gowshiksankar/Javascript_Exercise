//object=> key-value pair
//creating=>accessing=>updating a properties =>Deleting Propety

//creating new object

//1.creating object using new keyword
const car = new Object(); //object consgructor syntax
car['name'] = "nexon";
car.brand = "tata";
car.price = 15,
    car.color = "black"


const person = {                   //object literal syntax
    name: "Gowshik",
    age: 22,
    job: "Developer",
    salary: 50000,
    gender: "male"
}
//2.Accessing an object

//dot notation
console.log(person.age);
console.log(person.salary);


//bracket notation
console.log(person['name']);
console.log(person['gender']);
console.log(person);

//updating an propety
person.age = 23;
person.salary = 80000;
person['company_name'] = "zoho";
person["place"] = "Thirumangalam, Madurai , Tamilnadu"

//delete an one property
delete person.place;
console.log(person);

//iterate an object
//print keys only
for (key in person) {
    console.log(key);
}

//print key & values o
for (key in person) {
    console.log(key, person[key]);  //Dot notation won't work here

}