//map()
let a = [10, 23, 22, 1, 3, 4, 32]
let b = a.map((num) => {
    return num * 10;

})

for (let nums of b) {
    console.log(nums);
}


// adelt age 
let a = [10, 23, 22, 1, 3, 4, 32]
let b = a.map((num, i) => {
    if (num >= 18) {
        console.log(a[i] + " adelt age")
    } else {
        console.log(a[i] + " not adelt age");
    }

})
