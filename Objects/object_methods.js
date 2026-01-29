let person = {
    name: "gowshik",
    age: 23,
    job: "developer",
    salary: 40000,
    "full name": "S Gowshik"
}

console.log(Object.keys(person)); // output : [ 'name', 'age', 'job', 'salary', 'full name' ]
console.log(Object.values(person)); // output : [ 'gowshik', 23, 'developer', 40000, 'S Gowshik' ]
console.log(Object.entries(person)); /*[
                                          [ 'name', 'gowshik' ],
                                          [ 'age', 23 ],
                                          [ 'job', 'developer' ],
                                          [ 'salary', 40000 ],
                                          [ 'full name', 'S Gowshik' ]
                                       ] */

//freeze()  It Prevent  Modification , ADD/Delete keys                                    
Object.freeze(user);
user.age = 25; // ❌ not allowed update values

//seal() 👉 Can update values, but NOT add/delete keys
Object.seal(user);
user.age = 23;     // ✅
user.city = "NY";  // ❌
