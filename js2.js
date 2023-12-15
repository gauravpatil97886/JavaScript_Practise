// // Object creation using object literal notation
// let rectangle = {
//     length: 222,
//     breadth: 21,
//     draw()
//     {
//         console.log("the area of traingle is :")
//     }
// };

// // Factory function to create rectangles
// function createRectangle(l,b) {
//     return {
//         length: l,
//         breadth: b,
//         draw(){
//         console.log("the area of traingle is :")
//         }

//     };
// }

// // a=createRectangle(10,15);

// // console.log("your rectangle is ",a);

// //Constructor Function  -->pascal notation -->first letteer of word is capotal
// function Rectangle(){
//     this.length(20);
//     this.breadth(30);
//     this.draw=function()
//     {
//         console.log("draw a rect");
//     }
// }




// // factory function


// // function CreateMessage(name, age, country) {
// //     return {
// //         name,
// //         age,
// //         country,
// //         send() {
// //             console.log(`hi my name is ${this.name} and my age is ${this.age} and i am from ${this.country}❤️`);
// //         }
// //     };
// // }


// // let values=CreateMessage('Gaurav',18,'India');
// // console.log(values);
// // values.send()

// // COnstrctor function

// function send1()
// {
//     this.name='Gaurav';
//     this.age=18;
//     this.country='India';
//     this.message=function()
//      {
//         return `hi my name is ${this.name} and my age is ${this.age} and i am from ${this.country}❤️`;
//     };

// }

// // // // let addObj1= new send1();
// // // // console.log(addObj1);



// // // // let addObj =new send1();
// // // // console.log(addObj);


// // // function send1() {
// // //     this.name = 'Gaurav';
// // //     this.age = 18;
// // //     this.country = 'India';

// // //     return {
// // //         message: function() {
// // //             return `hi my name is ${name} and my age is ${age} and I am from ${country}❤️`;
// // //         },
// // //         getName:function()
// // //         {
// // //             return name;
// // //         }
// // //     };
// // // }

// // // let addObj = send1();
// // // console.log(addObj.message());


// // // // //------------------------Dynamic nature of Object-------------
// // // // // var a = {
// // // // //     l: 12,
// // // // //     b: 13
// // // // //   };

// // // // // a.c=4;
// // // // // a.d=5;
// // // // // console.log(a);

// // // // // delete a.c;
// // // // // // console.log(l+b);

// // // // // console.log()

  
// // // // a=10;
// // // // b=11;
// // // // c='10';

// // // Use camelCase for variable names -> numberOfStudents
// // // Constructor function should use Pascal Notation -> FirstLetterOfEveryWord
// // // Constructor function properties/methods should be initialized/defined

// // // Constructor function: Pascal Notation -> FirstLetterOfEveryWord
// // function Rectangle(length, breadth) {
// //     // Initialize properti es
// //     this.length = length;
// //     this.breadth = breadth;

// //     // Define method
// //     this.draw = function() {
// //         console.log('drawing');
// //     };
// // }

// // // Object creation using constructor function
// // let rectangleObject = new Rectangle(4, 6);

// // // Add a new property to the object
// // rectangleObject.color = 'yellow';

// // // Log the object to the console
// // console.log(rectangleObject);

// // // Delete a property from the object
// // delete rectangleObject.color;

// // // Log the modified object to the console
// // console.log(rectangleObject);

// // // Accessing properties of the rectangle object
// // // rectangle.length;
// // // rectangle.breadth;



// // Types in JS

// // 1) primitive or value types
// // 2)Reference Type or Object


// // let a =10;
// // let b=a;
// // a++;
// // console.log(a);
// // console.log(b);

// //primitive are copied by their value 
// // //refrences  are copied by their address/refrecnes

// // // Primitive values
// // let num1 = 10;
// // let num2 = num1;

// // num2++; // num2 is now 11, but num1 is still 10

// // console.log(num1,num2);
// // // References
// // let obj1 = { a: 10 };
// // let obj2 = obj1;

// // console.log(obj1,obj2);
// // obj2.a = 20; // obj2.a is now 20, and obj1.a is also 20

// // console.log(obj1,obj2);


// //  Note
// // * primitive are copied by their CSS value
// // * refrences are copied by their address
// // Object Creation:

// // Use object literal notation {} for simple, one-off object creations.
// // Employ factory functions to create multiple instances of similar objects.
// // Utilize constructor functions for creating objects with shared properties/methods.
// // Naming Conventions:

// // Follow naming conventions like PascalCase for constructor functions and camelCase for variables.
// // Ensure properties and methods are properly initialized/defined within constructor functions.
// // Primitive vs. Reference Types:

// // Understand the difference between primitive types (copied by value) and reference types (copied by reference).



// // var a ={value:10}
// // //let a=10;
// // function increment(a) {
// //      a.value++; // Increment the passed value and return the updated value
// // }
// // increment(a); // Update 'a' with the returned incremented value
// // console.log("your value:",a); // Output the updated 'a'




// // function incrementPrimitive(num) {
// //     num++; // Increment the passed number by 1
// //     return num; // Return the updated number
// // }

// // let a = 100;
// // a = incrementPrimitive(a); // Update 'a' with the returned incremented value
// // console.log(a); // Output: 11 (a is incremented within the function)


// // function incrementObjectProperty(obj) {
// //     obj.age++; // Increment the 'age' property of the passed object by 1
// // }

// // let person = { name: 'Alice', age: 25 };
// // incrementObjectProperty(person); // Increment 'age' property of 'person' object
// // console.log(person.age); // Output: 26 (the 'age' property of the object is modified within the function)



//Iterating through Object
// 1) For of
// 2) For in

// Key differences:
// for...of is used with iterable objects and accesses the values directly.
// for...in is used with objects to iterate over enumerable keys or properties.

let Rectangle={
    leangth:12,
    breadth:10

}

// 1) for (let key in Rectangle)
// {
//     //key are reflected to key vARIABLE

//     //Values are reflected to  Rectangle[key] 
//     console.log(key,Rectangle[key]);
// }

// 2)

// for  (let key of Object.keys(Rectangle))
// for (let key of Object.entries(Rectangle))
// {
//     console.log(key);
// }

// Object Cloning: Creating an exact copy of an object while preserving its properties and values.

// Tip: There are multiple ways to clone objects in JavaScript.

// Method 1: Iteration
// Iterating through the properties of the source object and assigning them to the clone object.

// let src = { a: 10, b: 20, c: 30 };
// let clone = {};

// for (let key in src) {
//     clone[key] = src[key];
//     // Tip: Printing the key-value pairs for demonstration purposes.
//     console.log(`Key: ${key}, Value (src): ${src[key]}, Value (clone): ${clone[key]}`);
// }
// Tip: Always consider edge cases and handle them gracefully in interviews.

// Method 2: Using Object.assign
// Utilizing Object.assign() to create a shallow copy of the source object.

// let src = { a: 10, b: 20, c: 30 };
// let clone = Object.assign({}, src);
// console.log(clone);

// Tip: Object.assign() creates a shallow copy, which means it doesn't clone nested objects deeply.

// Method 3: Spread Operator
// Using the spread operator (...) to clone the object.

// let src = { a: 10, b: 20, c: 30 };
// let clone = { ...src };
// console.log(clone);

// Tip: The spread operator is concise and effective for object cloning in modern JavaScript.

// Note: 
// When cloning objects, be cautious with nested objects or arrays within the source object. 
// Shallow copying might not create independent copies for nested elements.

// Additionally, remember that all these methods create a shallow copy, so modifications to nested objects or arrays in the original object might reflect in the cloned object and vice versa.


// Garbage Collection: Automatically deallocates memory by identifying unused variables or constants
// The garbage collector operates independently in the background without our direct control

// Tips:
// 1. Utilize const and let instead of var to limit variable scope and aid the garbage collector in managing memory efficiently.
// 2. Minimize global variables to reduce memory consumption and assist in better garbage collection.
// 3. Be mindful of circular references to prevent memory leaks that might not be immediately identified by the garbage collector.




