// introduction.js
console.log('hello');

// variables.js
var example = 'some string';
console.log(example);

// strings.js
var someString = 'this is a string';
console.log(someString);

// string-length.js
var example = 'example string';
console.log(example.length);

// revising-strings.js
var pizza = 'pizza is alright';
pizza = pizza.replace('alright', 'wonderful');
console.log(pizza);

// numbers.js
var example = 123456789;
console.log(example);

// rounding-numbers.js
var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);

// number-to-string.js
var n = 128;
console.log(n.toString());

// if-statement.js
var fruit = 'orange';
if(fruit.length > 5){
  console.log('The fruit name has more than five characters.');
} else {
  console.log('The fruit name has five characters or less');
}

// for-loop.js
var total = 0;
var limit = 10;
for(var i = 0; i < limit; i++){
  total += i;
}
console.log(total);

// arrays.js
var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);


// array-filtering.js
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function(number){
  return number % 2 === 0;
});
console.log(filtered);

// accessing-array-values.js
var food = ['apple', 'pizza', 'pear'];
console.log(food[1]);

// looping-through-arrays.js
var pets = ['cat', 'dog', 'rat'];
for(var i = 0; i < pets.length; i++){
  pets[i] = pets[i] + 's';
}
console.log(pets);

// objects.js
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};
console.log(pizza);

// object-properties.js
var food = {
  types: 'only pizza'
};
console.log(food.types);

// functions.js
function eat(food){
  return food + ' tasted really good.';
}

console.log(eat('bananas'));

// function-arguments.js
function math(x, y, z){
  return y * z + x;
}

console.log(math(53, 61, 67));

// scope.js
 var a = 1, b = 2, c = 3;  
   
 (function firstFunction(){  
     var b = 5, c = 6;  
   
     (function secondFunction(){  
         var b = 8;  
         // a: 1, b: 8, c: 6
         console.log("a: "+a+", b: "+b+", c: "+c);  
         (function thirdFunction(){  
             var a = 7, c = 9;  
   
             (function fourthFunction(){  
                 var a = 1, c = 8;  
             })();  
         })();  
     })();  
 })();  
