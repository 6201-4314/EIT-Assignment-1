//Task related to Array:

// concat()
let fName = "Nazmul";
let lName = "Hossain";
let fullName = fName.concat(" ").concat(lName);
console.log(fullName);

//every
let value = (num) => num > 300;
let numbers = [320, 1000, 2032, 450];
console.log(numbers.every(value));

// fill()
let value = [1, 23, 46, 58];
value.fill(100, 1, 3);
console.log(value);

// filter() , find(), findIndex()

let ages = [32, 33, 16, 40, 40, 45, 34, , 22, 12, 11, 5];
function checkAdult(age) {
    return age >= 18;
}
console.log(ages.filter(checkAdult))  // filter

console.log(ages.find(checkAdult))    //find

let output = prices.findIndex((price) => ages === 40);   // findIndex()
console.log(output);

// forEach()
var javascript = {
    name: 'javascript',
    libraries: ['react', 'angulur', 'vue'],
    printLiraries: function() {
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`)
        })
    }
}
javascript.printLiraries();

//from()
const myName = "nazmul hossain";
console.log(Array.from(myName));


// includes() method
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let includesFruit = fruits.includes("Apple");
console.log(includesFruit);

// isArray()
let arr = [];
console.log(Array.isArray(arr));

// join()
const namesArr = ['react', 'angulur', 'vue'];
console.log(namesArr.join(" * "));


// pop(), push() , shift(),unshift(),reverse

let userName = ["nazmul", "rakib", "jakaria", "mridul", "raihan"];

userName.push("Jahid");    //push()
console.log(userName);

userName.pop()            // pop()
console.log(userName);

userName.unshift("mamun")    //unshift()
console.log(userName)

userName.shift()           //shift()
console.log(userName)

userName.reverse();      //reverse()
console.log(userName)

let sliceName = userName.slice(0, 2)   //slice() (find index-1 value)
console.log(sliceName)

console.log("splice name :" + userName.splice(1, 3))  //splice *delete*

//shot() method
let numShot = [23, 22, 12, 343, 56, 78, 34]
console.log("shoted : " + numShot.sort())






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
