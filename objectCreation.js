// Object Creation Using Object Literal Notation

// Example and usage of object literals to create objects.
// Factory Function for Object Creation

// Demonstrating the use of a factory function to create multiple instances of similar objects.
// Constructor Function for Object Creation

// Implementing a constructor function to create objects with shared properties/methods.

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
