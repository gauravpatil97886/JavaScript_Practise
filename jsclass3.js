// // Here are some examples of static methods in the Math object:

// // Math.abs(x): Returns the absolute value of x.
// // Math.acos(x): Returns the arccosine of x.
// // Math.asin(x): Returns the arcsine of x.
// // Math.atan(x): Returns the arctangent of x.
// // Math.ceil(x): Returns the smallest integer greater than or equal to x.
// // Math.cos(x): Returns the cosine of x.
// // Math.exp(x): Returns the exponential of x.
// // Math.floor(x): Returns the largest integer less than or equal to x.
// // Math.log(x): Returns the natural logarithm of x.
// // Math.max(x1, x2, ..., xn): Returns the maximum of x1, x2, ..., xn.
// // Math.min(x1, x2, ..., xn): Returns the minimum of x1, x2, ..., xn.
// // Math.pow(x, y): Returns the value of x raised to the power of y.
// // Math.random(): Returns a random number between 0 and 1.
// // Math.round(x): Returns the nearest integer to x.
// // Math.sin(x): Returns the sine of x.
// // Math.sqrt(x): Returns the square root of x.
// // Math.tan(x): Returns the tangent of x.


// // let a=Math.PI;
// // console.log(a);

// // let a = -23;

// // if (Math.abs(a) === a) {
// //     console.log("positive");

// // } else {
// //     console.log("Negative");
// // }


// // String

// // There are 2 types of strings in JavaScript: primitive and object.

// // 2 types of string in JS - primitive and object: 
// // Describes the two categories of strings available in JavaScript, distinguishing between primitive strings (created with quotes) and object strings (created using the new String() syntax).

// // Primitive string:
// let FirstName = '       Gaurav  ';
// console.log(FirstName); // Outputs: Gaurav
// c=new String(FirstName); //convert primitive to object


// // Object string:
// let Lastname = new String('Patil');
// console.log(Lastname); // Outputs: [String: 'Patil']
// console.log(typeof Lastname); // Outputs: object

// //string methods
// let str = "Hello, World!";

// // charAt(index): Returns the character at the specified index
// let charAtIndex = str.charAt(0); // Returns 'H'

// // charCodeAt(index): Returns the Unicode of the character at the specified index
// let charCodeAtIndex = str.charCodeAt(0); // Returns 72

// // concat(string1, string2, ...): Joins two or more strings
// let concatenated = str.concat(' Welcome', ' to the world'); // Returns 'Hello, World! Welcome to the world'

// // indexOf(searchString, startIndex): Returns the index of the first occurrence of a specified value
// let index = str.indexOf('o'); // Returns 4

// // lastIndexOf(searchString, startIndex): Returns the index of the last occurrence of a specified value
// let lastIndex = str.lastIndexOf('o'); // Returns 8

// // slice(startIndex, endIndex): Extracts a section of a string and returns a new string
// let sliced = str.slice(7, 12); // Returns 'World'

// // substring(startIndex, endIndex): Extracts characters from a string, between two specified indices
// let subString = str.substring(7, 12); // Returns 'World'

// // substr(startIndex, length): Extracts a specified number of characters from a string, starting at a specified index
// let subStr = str.substr(7, 5); // Returns 'World'

// // toUpperCase(): Converts a string to uppercase letters
// let upperCase = str.toUpperCase(); // Returns 'HELLO, WORLD!'

// // toLowerCase(): Converts a string to lowercase letters
// let lowerCase = str.toLowerCase(); // Returns 'hello, world!'

// // trim(): Removes whitespace from both ends of a string
// let trimmed = "  Hello, World!  ".trim(); // Returns 'Hello, World!'

// // Logging the results
// console.log("charAt:", charAtIndex);
// console.log("charCodeAt:", charCodeAtIndex);
// console.log("concat:", concatenated);
// console.log("indexOf:", index);
// console.log("lastIndexOf:", lastIndex);
// console.log("slice:", sliced);
// console.log("substring:", subString);
// console.log("substr:", subStr);
// console.log("toUpperCase:", upperCase);
// console.log("toLowerCase:", lowerCase);
// console.log("trim:", trimmed);

// //trim
// //replace  

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2.    )); // returns the number 4
    
// ///console.log(eval(s2)); // returns the string "2 + 2"

// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.split(' '); // Splitting the sentence into words using space as a separator

// console.log(words); 
// // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// let multiCharString = "apple,banana;orange|pear";
// let multiSplit = multiCharString.split(/[,;|]/); // Splitting using multiple separators

// console.log(multiSplit); // Output: ["apple", "banana", "orange", "pear"]
// let a = 'gaurav.dinesh.patil';
// let splitted = a.split('.');
// let wordCount = splitted.length;
// console.log(a);
// console.log('Word count is', wordCount); // Output: Word count is 3


//Template Literal

// let message=`his is my first message \n 
// this is my first message'
// `;


// let date1=new Date();
// let date2=new Date(2001,9,26,7,30);
// date2.setHours(3); // Set the hour to 3
// date2.setMinutes(32); // Set the minutes to 32console.log(date2);
// console.log(date2);