// Write a program that uses filter to remove all  negative numbers from an array of numbers


var num:number[] = [12,43,-65,-78,34,-98,-76,34,-65];
num = num.filter(function(x){
      return x > -1
});
console.log(num);

// Given an array of numbers [1, 2, 3, 4, 5], use the  map method to create a new array where each number is multiplied by 2.


var num2:number[] = [1,2,3,4,5];
let array = num2.map(test);


function test(x:number){
    return x * 2;
}
console.log(array);


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

    
let fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];
fruits = fruits.filter(function(x){
   return x > 'a,b,c,g,d'  
})
console.log(fruits);


// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers

const evennumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = evennumber.filter((x)=>{
return x % 2 ==0
})
console.log(value);


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

const celsiusTemperatures = [0, 10, 20, 30, 40];

const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);

console.log(fahrenheitTemperatures);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


const numbers = [3, 6, 9, 12, 15, 18];

const doubledOddNumbers = numbers
  .filter(number => number % 2 !== 0) 
  .map(oddNumber => oddNumber * 2); 

console.log(doubledOddNumbers);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".


const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

names.forEach(name => {
  console.log(name + "!");
});
