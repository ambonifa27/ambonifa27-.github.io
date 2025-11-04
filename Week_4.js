// write a variable that is a string and output to console (hint: it's console.log(variable name))
let variable1 = "Hey I'm variable one!";
console.log(variable1);


// write a variable that is a number and output to console (hint: it's console.log(variable name))
let numberOne = 1;
console.log(numberOne);


// write a variable that takes any two numbers and adds them 
let firstNum = 1;
let secondNum = 3;
let sum = firstNum + secondNum;
console.log(`The sum of ${firstNum} and ${secondNum} is: ${sum}`);


// write a variable that takes any two numbers and subtracts them and output to console
let firstValue = 15;
let secondValue = 3;
let subtraction = firstValue - secondValue;
console.log(`The subtraction total of ${firstValue} and ${secondValue} is: ${subtraction}`);


// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let one = 13;
let two = 6;
let modulo = 13 % 6;
console.log(`The modulo total of ${one} and ${two} is: ${modulo}`);


// write a variable that takes any two numbers and perform an exponential value and output to console 
let firstOne = 2;
let secondOne = 3;
let exponential = firstOne ** secondOne;
console.log(`The exponential value of ${firstOne} and ${secondOne} is: ${exponential}`);


// write a statement that is false using a conditional statement and output to console 
let firstDog = "Boston Terrier";
let secondDog = "American Pitbull Terrier";
console.log(firstDog == secondDog);

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

// console.log the values of that object one by one. 

// create an array 
let beanz = {
    breed : "dog", 
    kind: "boston terrier", 
    age: "3", 
    output: function() {
        return `Beanz is a ${this.breed} that is a ${this.age} year old ${this.kind}.`
    }
}
console.log(beanz.output());


// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
console.log(someArray[3]);


// call all values in the array using a loop 
for(let i = 0; i <someArray.length; i++){
    console.log(someArray[i]);
}
// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement;
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}
console.log(ifStatement);
console.log(`The value of the ifStatement is false because the condition of the if statement was not true aka 5 is not < 5, triggering the else statement to return false. It would be true if the 5 was <= 5.`);