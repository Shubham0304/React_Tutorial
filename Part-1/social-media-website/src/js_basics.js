
//Arrow function : 
const DoSomething = () => {

}


// objects 

const person = {
    name: "Shubham",
    isMarried: false,
    nationality: "Indian"
}


// Destructing object into different variables
//const {name, isMarried, nationality} = person

// One more example: 

const name = "Test"

const person2 = {
    name, // do this if the key name and the variable name (whose value you want to assign to that key is same)
    isMarried:false,
    nationality: "Indian"
}

//If you want to copy exactly one object to another but want to change only one of the values : 

const person3 = {...person, name: "Jack"};


const names = ["Pedo", "Jack", "Jessica"];
const name_array = ["Pedo", "Jack", "Jessica"];


// To copy an entire array and also add a new element to it:

const name_array2 = [...name_array, "Shubham"];


// JS Array Functions:
// To do one operation on every element of an array Use map :
names.map(()=>{
    console.log(name);
})

names.map((name)=>{
    return name+1;
})

// To filter the array based on a specific condition:
// Like this would return all the elements of an array whose name is not Pedro
names.filter((name)=> {
    return name !== "Pedro";
})

// To The .reduce() function in JavaScript is an array method used to reduce an array to a single value by executing a callback function on each element of the array (from left to right).
//.reduce()
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// Async Await Fetch :



// var listOfMovies = fetch("url.com/movies");
// console.log(listOfMovies)

const event = new Promise((resolve,reject)=> {
var name = "Shubham";
if (name == "Shubham") {
    resolve(name);
}
else {
    reject("Name was not Shubham, name was:"+name);
}
});

event.then((name)=>{
console.log(name);
}).catch((error)=> {
    console.log(error);
}).finally(()=> {
    console.log("Promise resolved!!")
})
