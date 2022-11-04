//Task related to Array:



// includes() method
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let includesFruit = fruits.includes("Apple");
console.log(includesFruit);


//Task related to Object

let persons = {
    firstName: "Nazmul",
    lastName: "Hossain",
    age: 22,
    favColor: "Black"
};
console.log(Object.entries(persons));    //  entries() method
//output
// [
//   [ 'firstName', 'Nazmul' ],
//   [ 'lastName', 'Hossain' ],
//   [ 'age', 22 ],
//   [ 'favColor', 'Black' ]
// ]


console.log(Object.hasOwn(persons, "age")); //true       //hasOwn()method
console.log(Object.hasOwn(persons, "name")); //false     //hasOwn()method

console.log(Object.keys(persons));        //krys() method

console.log(Object.values(persons));      //values() method


let info = {...persons };        //spread operator
console.log(info);
//output
// {
//   firstName: 'Nazmul',
//   lastName: 'Hossain',
//   age: 22,
//   favColor: 'Black'
// }



//Task related to Loop

// for loop
for(let i = 0; i<10; i++){
   console.log(i)
}
//for-of loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let fruit of fruits) {
    console.log("My Favourite Fruit : " + fruit);
}

//for-in loop
let persons = {
    firstName: "Nazmul",
    lastName: "Hossain",
    age: 22,
    favColor: "Black"
};
for (let id in persons) {
    console.log( id + " : " + persons[id]);
}
