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
