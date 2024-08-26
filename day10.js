//ARRAY 

var fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

fruits.push("Guava")
// fruits.pop();
fruits.shift();

// console.log(fruits);


// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// OBJECTS IN JS

let studentData = {
    name: "Farheen",
    age: 25,
    cellPhoneNum: 1234567890,
}


let nsfMernBatch = [
    {
        name: "Hasnain",
        age: 15,
        cellPhoneNum: 1234567890,
    },
    {
        name: "Farheen",
        age: 25,
        cellPhoneNum: 1234567890,
    },
    {
        name: "Ali",
        age: 35,
        cellPhoneNum: 1234567890,
    },
    {
        name: "Ahmed",
        age: 45,
        cellPhoneNum: 1234567890,
    }
]



nsfMernBatch.map((student, index) => {
    return console.log(`Sno: ${index + 1}, Name: ${student.name}`)
})